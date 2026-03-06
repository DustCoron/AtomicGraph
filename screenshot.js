import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('Navigating to http://localhost:3002/...');
    await page.goto('http://localhost:3002/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    console.log('Waiting for workspace to render...');
    await page.waitForSelector('.dk-workspace', { timeout: 10000 });

    await page.waitForTimeout(2000);

    const screenshotPath = path.join(__dirname, 'screenshot.png');
    await page.screenshot({
      path: screenshotPath,
      fullPage: false
    });

    console.log(`Screenshot saved to: ${screenshotPath}`);

    const layout = await page.evaluate(() => {
      const results = {
        hasMenuBar: !!document.querySelector('.nt-menu-item'),
        hasToolbar: !!document.querySelector('.nt-btn'),
        hasWorkspace: !!document.querySelector('.dk-workspace'),
        hasDockPanels: document.querySelectorAll('.dk-panel').length,
        hasDockHeaders: document.querySelectorAll('.dk-header').length,
        hasTabs: document.querySelectorAll('.dk-tab').length,
        hasActionButtons: document.querySelectorAll('.dk-action-btn').length,
        panelIds: Array.from(document.querySelectorAll('[data-panel-id]')).map(el => el.getAttribute('data-panel-id')),
        errors: []
      };

      const errors = [];
      const consoleErrors = window._consoleErrors || [];
      if (consoleErrors.length > 0) {
        errors.push(...consoleErrors);
      }

      results.errors = errors;
      return results;
    });

    console.log('\n=== Layout Analysis ===');
    console.log(`Menu Bar: ${layout.hasMenuBar ? '✓ Found' : '✗ Missing'}`);
    console.log(`Toolbar: ${layout.hasToolbar ? '✓ Found' : '✗ Missing'}`);
    console.log(`Workspace: ${layout.hasWorkspace ? '✓ Found' : '✗ Missing'}`);
    console.log(`Dock Panels: ${layout.hasDockPanels} panels found`);
    console.log(`Dock Headers: ${layout.hasDockHeaders} headers found`);
    console.log(`Tabs: ${layout.hasTabs} tabs found`);
    console.log(`Action Buttons: ${layout.hasActionButtons} buttons found`);
    console.log(`Panel IDs: ${layout.panelIds.join(', ')}`);

    if (layout.errors.length > 0) {
      console.log('\n=== Errors ===');
      layout.errors.forEach(err => console.log(`  - ${err}`));
    }

    const consoleMessages = [];
    page.on('console', msg => {
      const type = msg.type();
      if (type === 'error' || type === 'warning') {
        consoleMessages.push(`[${type}] ${msg.text()}`);
      }
    });

    if (consoleMessages.length > 0) {
      console.log('\n=== Console Messages ===');
      consoleMessages.forEach(msg => console.log(`  ${msg}`));
    }

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
    console.log('\nBrowser closed.');
  }
})();
