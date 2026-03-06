import { execSync, spawnSync } from 'node:child_process';
import path from 'node:path';

const TARGET_PORT = 3000;
const VITE_ARGS = ['--port=3000', '--host=0.0.0.0'];

function parsePidsOnPort(port) {
  let output;
  try {
    output = execSync('netstat -ano', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch {
    return new Set();
  }

  const pids = new Set();
  const lines = String(output).split(/\r?\n/);
  const pattern = /^\\s*(TCP|TCP6)\\s+\\S+:(\\d+)\\s+\\S+\\s+LISTENING\\s+(\\d+)\\s*$/i;

  for (const line of lines) {
    const match = line.match(pattern);
    if (!match) continue;
    if (Number(match[2]) !== port) continue;
    const pid = Number(match[3]);
    if (Number.isInteger(pid) && pid > 0) pids.add(pid);
  }

  return pids;
}

function stopPid(pid) {
  try {
    execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

const pids = [...parsePidsOnPort(TARGET_PORT)];
if (pids.length > 0) {
  console.log(`Stopping existing listeners on port ${TARGET_PORT}: ${pids.join(', ')}`);
  pids.forEach(stopPid);
}

const vitePath = path.join(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');
const result = spawnSync(process.execPath, [vitePath, ...VITE_ARGS], {
  stdio: 'inherit',
  cwd: process.cwd(),
});

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 0;

