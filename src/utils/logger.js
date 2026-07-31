function getTimestamp() {
  return new Date().toLocaleString();
}

export function logInfo(context, message) {
  console.log(
    `[INFO] ${getTimestamp()} | ${context} | ${message}`
  );
}

export function logWarn(context, message) {
  console.warn(
    `[WARN] ${getTimestamp()} | ${context} | ${message}`
  );
}

export function logError(context, error) {
  console.error(
    `[ERROR] ${getTimestamp()} | ${context}`,
    error
  );
}