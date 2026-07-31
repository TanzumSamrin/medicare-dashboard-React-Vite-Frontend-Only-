import Badge from "../ui/Badge";

// [REQ-2c] switch for status badge color
function getStatusVariant(status) {
  switch (status) {
    case "Pending":
      return "pending";
    case "Confirmed":
      return "confirmed";
    case "Completed":
      return "completed";
    case "Cancelled":
      return "cancelled";
    default:
      return "pending";
  }
}

function AppointmentRow({ appointment, onStatusChange, onDelete }) {
  return (
    <tr>
      {/* PATIENT */}
      <td>
        <div className="cell-primary">{appointment.patientName}</div>
        <div className="cell-secondary">{appointment.phone}</div>
      </td>

      {/* DOCTOR */}
      <td>
        <div className="cell-primary">{appointment.doctorName}</div>
        <div className="cell-secondary">{appointment.department}</div>
      </td>

      {/* DATE & TIME */}
      <td>
        <div className="cell-primary">{appointment.date}</div>
        <div className="cell-secondary">{appointment.time}</div>
      </td>

      {/* STATUS + Change dropdown */}
      <td>
        <Badge variant={getStatusVariant(appointment.status)}>
          {appointment.status}
        </Badge>
        <select
          className="status-change-select"
          value={appointment.status}
          onChange={(e) => onStatusChange(appointment.id, e.target.value)}
        >
          <option value="Pending">Change</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>

      {/* ACTION */}
      <td>
        <button
          type="button"
          className="delete-link"
          onClick={() => onDelete(appointment.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default AppointmentRow;