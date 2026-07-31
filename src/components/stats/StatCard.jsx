function StatCard({ title, value, icon, iconBg }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: iconBg }}>
        {icon}
      </div>
      <p className="stat-label">{title}</p>
      <h2 className="stat-value">
        {String(value).padStart(2, "0")}
      </h2>
    </div>
  );
}

export default StatCard;