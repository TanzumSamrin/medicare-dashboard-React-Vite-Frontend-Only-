function FallbackUI({ error, resetErrorBoundary }) {
  return (
    <div className="error-container">
      <h2>⚠️ Something went wrong</h2>

      <p>
        The application encountered an unexpected
        error.
      </p>

      {error && (
        <pre className="error-message">
          {error.message}
        </pre>
      )}

      <button
        className="btn btn-primary"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
}

export default FallbackUI;