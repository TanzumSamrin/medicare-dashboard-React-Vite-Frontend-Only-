function EmptyState({
  title = "No Data",
  message = "Nothing to display.",
}) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>

      <p>{message}</p>
    </div>
  );
}

export default EmptyState;