import StatCard from "./StatCard";
import { FaStethoscope, FaCalendarAlt, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";

// [REQ-1] Rendering stat cards using .map()

function StatGrid({ doctors, appointments }) {
  const stats = [
    {
      id: 1,
      title: "TOTAL DOCTORS",
      value: doctors.length,
      icon: <FaStethoscope size={18} color="#0f766e" />,
      iconBg: "#ccfbf1",
    },
    {
      id: 2,
      title: "TOTAL APPOINTMENTS",
      value: appointments.length,
      icon: <FaCalendarAlt size={18} color="#1d4ed8" />,
      iconBg: "#dbeafe",
    },
    {
      id: 3,
      title: "PENDING APPOINTMENTS",
      value: appointments.filter((item) => item.status === "Pending").length,
      icon: <FaHourglassHalf size={18} color="#b45309" />,
      iconBg: "#fef3c7",
    },
    {
      id: 4,
      title: "COMPLETED APPOINTMENTS",
      value: appointments.filter((item) => item.status === "Completed").length,
      icon: <FaCheckCircle size={18} color="#15803d" />,
      iconBg: "#dcfce7",
    },
  ];

  return (
    <div className="stat-grid">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconBg={stat.iconBg}
        />
      ))}
    </div>
  );
}

export default StatGrid;