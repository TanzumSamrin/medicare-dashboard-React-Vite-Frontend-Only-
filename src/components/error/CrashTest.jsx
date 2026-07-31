function CrashTest({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error(
      "Crash Test Triggered!"
    );
  }

  return (
    <div className="crash-box">
      <p>
        Medicare Clinic © 2026 Built with React.
      </p>
    </div>
  );
}

export default CrashTest;