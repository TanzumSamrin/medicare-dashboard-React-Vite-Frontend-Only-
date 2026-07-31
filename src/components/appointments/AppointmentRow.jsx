import Badge from "../ui/Badge";
import Button from "../ui/Button";

function AppointmentRow({
  appointment,
  onComplete,
  onDelete,
}) {
  const isCompleted =
    appointment.status === "Completed";

  return (
    <tr>
      <td>{appointment.patientName}</td>

      <td>{appointment.doctorName}</td>

      <td>{appointment.department}</td>

      <td>{appointment.date}</td>

      <td>{appointment.time}</td>

      <td>
        <Badge
          variant={
            isCompleted
              ? "completed"
              : "pending"
          }
        >
          {appointment.status}
        </Badge>
      </td>

      <td className="action-buttons">
        <Button
          variant="primary"
          disabled={isCompleted}
          onClick={() =>
            onComplete(appointment.id)
          }
        >
          Complete
        </Button>

        <Button
          variant="danger"
          onClick={() =>
            onDelete(appointment.id)
          }
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default AppointmentRow;