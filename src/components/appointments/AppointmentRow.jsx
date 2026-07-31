import Badge from "../ui/Badge";
import Button from "../ui/Button";

// [REQ-2] switch for status badge color
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
  const handleStatusChange = (e) => {
    onStatusChange(appointment.id, e.target.value);
  };

  return (
    <tr>
      <td>
        <div>{appointment.patientName}</div>
        <small style={{ color: "var(--text-muted)" }}>
          {appointment.phone}
        </small>
      </td>

      <td>
        <div>{appointment.doctorName}</div>
        <small style={{ color: "var(--text-muted)" }}>
          {appointment.department}
        </small>
      </td>

      <td>
        {appointment.date}
        <br />
        <small style={{ color: "var(--text-muted)" }}>
          {appointment.time}
        </small>
      </td>

      <td>
        <Badge variant={getStatusVariant(appointment.status)}>
          {appointment.status}
        </Badge>
      </td>

      <td>
        {/* Status dropdown */}
        <select
          className="form-control status-select"
          value={appointment.status}
          onChange={handleStatusChange}
          style={{ minWidth: "130px", padding: "6px 10px" }}
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>

      <td>
        <Button
          variant="danger"
          onClick={() => onDelete(appointment.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default AppointmentRow;