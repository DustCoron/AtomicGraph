import React from 'react';
import { appendAppLog } from '../core/logs';

interface ViewErrorBoundaryProps {
  viewType: string;
  viewId: string;
  children: React.ReactNode;
}

interface ViewErrorBoundaryState {
  error: Error | null;
  info: React.ErrorInfo | null;
}

export class ViewErrorBoundary extends React.Component<ViewErrorBoundaryProps, ViewErrorBoundaryState> {
  state: ViewErrorBoundaryState = { error: null, info: null };

  static getDerivedStateFromError(error: Error): Partial<ViewErrorBoundaryState> {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    appendAppLog({
      level: 'error',
      source: 'view-render',
      message: `${this.props.viewType}:${this.props.viewId} ${error.name}: ${error.message}`,
      details: `${info.componentStack || ''}\n${error.stack || ''}`.trim(),
    });
    this.setState({ info });
  }

  private onReset = () => {
    this.setState({ error: null, info: null });
  };

  render() {
    const { error, info } = this.state;
    if (!error) return this.props.children;

    return (
      <div style={wrapStyle}>
        <div style={titleStyle}>View crashed: {this.props.viewType}</div>
        <div style={subStyle}>The panel is isolated. Other panels should keep working.</div>
        <pre style={msgStyle}>{`${error.name}: ${error.message}`}</pre>
        {info?.componentStack && <pre style={stackStyle}>{info.componentStack}</pre>}
        <div style={actionsStyle}>
          <button style={btnStyle} onClick={this.onReset}>Retry View</button>
          <button style={btnStyle} onClick={() => window.location.reload()}>Reload App</button>
        </div>
      </div>
    );
  }
}

const wrapStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  padding: 10,
  background: '#1b222e',
  color: '#d7e4ff',
  overflow: 'auto',
  fontFamily: "'Segoe UI','Cascadia Code',sans-serif",
};

const titleStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: '#ffb5b5',
  marginBottom: 6,
};

const subStyle: React.CSSProperties = {
  fontSize: 11,
  color: '#9db0d5',
  marginBottom: 8,
};

const msgStyle: React.CSSProperties = {
  margin: 0,
  padding: 8,
  borderRadius: 6,
  border: '1px solid #704040',
  background: '#2b1616',
  color: '#ffd2d2',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: 11,
};

const stackStyle: React.CSSProperties = {
  margin: '8px 0 0',
  padding: 8,
  borderRadius: 6,
  border: '1px solid #3f557f',
  background: '#121b2a',
  color: '#bfd1f7',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: 10,
  maxHeight: 200,
  overflow: 'auto',
};

const actionsStyle: React.CSSProperties = {
  display: 'flex',
  gap: 8,
  marginTop: 10,
};

const btnStyle: React.CSSProperties = {
  background: '#264572',
  border: '1px solid #5f80b2',
  color: '#edf3ff',
  borderRadius: 5,
  padding: '5px 10px',
  fontSize: 11,
  cursor: 'pointer',
};
