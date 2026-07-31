function CrashTest({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error(
      "Crash Test Triggered!"
    );
  }

  return (
    <div className="crash-box">
      <p>
        Crash Test Component Loaded Successfully.
      </p>
    </div>
  );
}

export default CrashTest;