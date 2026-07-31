import StatCard from "./StatCard";

// [REQ-1] Rendering stat cards using .map()

function StatGrid({ doctors, appointments }) {
  const stats = [
    {
      id: 1,
      title: "Total Doctors",
      value: doctors.length,
    },
    {
      id: 2,
      title: "Total Appointments",
      value: appointments.length,
    },
    {
      id: 3,
      title: "Pending Appointments",
      value: appointments.filter(
        (item) => item.status === "Pending"
      ).length,
    },
    {
      id: 4,
      title: "Completed Appointments",
      value: appointments.filter(
        (item) => item.status === "Completed"
      ).length,
    },
  ];

  return (
    <div className="stat-grid">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
}

export default StatGrid;