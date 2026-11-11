import React from 'react';

const CHUNK_RELOAD_KEY = 'novadesk_chunk_reload_attempted';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, isChunkError: false };
  }

  static getDerivedStateFromError(error) {
    const isChunkError = Boolean(
      error && (
        error.name === 'ChunkLoadError' ||
        /loading chunk/i.test(error.message || '') ||
        /failed to fetch dynamically imported module/i.test(error.message || '') ||
        /importing a module script failed/i.test(error.message || '')
      )
    );
    return { hasError: true, error, isChunkError };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary] Caught render error:', error, errorInfo);

    // Auto-reload once for chunk load failures (new deployment)
    if (this.state.isChunkError && typeof window !== 'undefined' && window.sessionStorage) {
      if (!sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
        sessionStorage.setItem(CHUNK_RELOAD_KEY, 'true');
        window.location.reload();
      }
    }
  }

  handleReload = () => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(CHUNK_RELOAD_KEY);
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          textAlign: 'center',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          <div style={{
            maxWidth: '520px',
            background: '#ffffff',
            border: '1px solid #E2E8F0',
            borderRadius: '24px',
            padding: '40px 32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#EEF0FF',
              color: '#2E29FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '24px'
            }}>
              ↻
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0A0A2E', marginBottom: '12px' }}>
              {this.state.isChunkError ? 'New Version Available' : 'Something went wrong'}
            </h2>
            <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.6, marginBottom: '28px' }}>
              {this.state.isChunkError
                ? 'NovaDesk has been updated with new improvements. Please refresh to load the latest version.'
                : 'An unexpected error occurred while rendering this page. You can reload the page or return to the home screen.'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={this.handleReload}
                style={{
                  padding: '14px 28px',
                  background: '#2E29FF',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  cursor: 'pointer'
                }}
              >
                Refresh Page
              </button>
              <a
                href="/"
                style={{
                  padding: '14px 28px',
                  background: '#F8FAFC',
                  color: '#0A0A2E',
                  border: '1px solid #E2E8F0',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  textDecoration: 'none'
                }}
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
