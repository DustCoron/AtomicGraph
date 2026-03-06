import React from 'react';
import { appendAppLog } from '../core/logs';

interface CrashBoundaryProps {
  children: React.ReactNode;
}

interface CrashBoundaryState {
  renderError: Error | null;
  renderInfo: React.ErrorInfo | null;
  runtimeError: string | null;
}

export class CrashBoundary extends React.Component<CrashBoundaryProps, CrashBoundaryState> {
  state: CrashBoundaryState = {
    renderError: null,
    renderInfo: null,
    runtimeError: null,
  };

  static getDerivedStateFromError(error: Error): Partial<CrashBoundaryState> {
    return { renderError: error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[CrashBoundary] React render crash:', error, info);
    appendAppLog({
      level: 'error',
      source: 'react-render',
      message: `${error.name}: ${error.message}`,
      details: info.componentStack || error.stack,
    });
    this.setState({ renderInfo: info });
  }

  componentDidMount() {
    window.addEventListener('error', this.onWindowError);
    window.addEventListener('unhandledrejection', this.onUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.onWindowError);
    window.removeEventListener('unhandledrejection', this.onUnhandledRejection);
  }

  private onWindowError = (event: ErrorEvent) => {
    const msg = event.error instanceof Error
      ? `${event.error.name}: ${event.error.message}`
      : (event.message || 'Unknown runtime error');
    const where = event.filename ? ` @ ${event.filename}:${event.lineno}:${event.colno}` : '';
    console.error('[CrashBoundary] Window error:', event.error || event.message);
    appendAppLog({
      level: 'error',
      source: 'window-error',
      message: `${msg}${where}`,
      details: event.error?.stack,
    });
    this.setState({ runtimeError: `${msg}${where}` });
  };

  private onUnhandledRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    const safeStringify = (value: unknown): string => {
      try {
        return JSON.stringify(value);
      } catch {
        return '[unserializable rejection reason]';
      }
    };
    const msg = reason instanceof Error
      ? `${reason.name}: ${reason.message}`
      : (typeof reason === 'string' ? reason : safeStringify(reason));
    console.error('[CrashBoundary] Unhandled promise rejection:', reason);
    appendAppLog({
      level: 'error',
      source: 'unhandled-rejection',
      message: msg,
      details: reason instanceof Error ? reason.stack : undefined,
    });
    this.setState({ runtimeError: `Unhandled promise rejection: ${msg}` });
  };

  private onReload = () => {
    window.location.reload();
  };

  private onDismissRuntime = () => {
    this.setState({ runtimeError: null });
  };

  render() {
    const { renderError, renderInfo, runtimeError } = this.state;
    const fatal = !!renderError;
    const message = renderError
      ? `${renderError.name}: ${renderError.message}`
      : runtimeError;

    if (!fatal && !runtimeError) {
      return this.props.children;
    }

    return (
      <div style={overlayStyle}>
        <div style={panelStyle}>
          <div style={titleStyle}>{fatal ? 'Application Crashed' : 'Runtime Error Detected'}</div>
          <div style={subtitleStyle}>
            {fatal
              ? 'A rendering error crashed the app. See details below.'
              : 'An unexpected runtime error occurred. You can dismiss or reload.'}
          </div>
          <pre style={messageStyle}>{message || 'Unknown error'}</pre>
          {renderInfo?.componentStack && (
            <pre style={stackStyle}>{renderInfo.componentStack}</pre>
          )}
          <div style={actionsStyle}>
            {!fatal && (
              <button style={secondaryBtnStyle} onClick={this.onDismissRuntime}>
                Dismiss
              </button>
            )}
            <button style={primaryBtnStyle} onClick={this.onReload}>
              Reload App
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 99999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#0d1017',
  color: '#dde5ff',
  padding: 16,
  boxSizing: 'border-box',
};

const panelStyle: React.CSSProperties = {
  width: 'min(920px, 100%)',
  maxHeight: '90vh',
  overflow: 'auto',
  background: '#182131',
  border: '1px solid #38547f',
  borderRadius: 10,
  boxShadow: '0 16px 50px #00000088',
  padding: 14,
  boxSizing: 'border-box',
  fontFamily: "'Segoe UI', 'Cascadia Code', sans-serif",
};

const titleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: '#ffb4b4',
  marginBottom: 6,
};

const subtitleStyle: React.CSSProperties = {
  fontSize: 12,
  color: '#b8c6e8',
  marginBottom: 10,
};

const messageStyle: React.CSSProperties = {
  margin: 0,
  padding: 10,
  borderRadius: 6,
  border: '1px solid #704040',
  background: '#2b1616',
  color: '#ffd2d2',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: 12,
  lineHeight: 1.45,
};

const stackStyle: React.CSSProperties = {
  margin: '10px 0 0',
  padding: 10,
  borderRadius: 6,
  border: '1px solid #3a4f75',
  background: '#121b2a',
  color: '#bfd1f7',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: 11,
  lineHeight: 1.4,
  maxHeight: 260,
  overflow: 'auto',
};

const actionsStyle: React.CSSProperties = {
  marginTop: 12,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
};

const primaryBtnStyle: React.CSSProperties = {
  background: '#2b4d84',
  border: '1px solid #6d90c7',
  color: '#ecf2ff',
  borderRadius: 5,
  padding: '6px 12px',
  fontSize: 12,
  cursor: 'pointer',
};

const secondaryBtnStyle: React.CSSProperties = {
  background: '#1d283d',
  border: '1px solid #3f577f',
  color: '#d1ddfa',
  borderRadius: 5,
  padding: '6px 12px',
  fontSize: 12,
  cursor: 'pointer',
};
