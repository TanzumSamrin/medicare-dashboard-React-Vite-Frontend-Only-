
import Card from "../ui/Card";
import EmptyState from "../ui/EmptyState";
import AppointmentRow from "./AppointmentRow";

// REQ-1
// Rendering using map()

function AppointmentList({
  appointments,
  onComplete,
  onDelete,
}) {
  if (!appointments.length) {
    return (
      <Card title="Appointments">
        <EmptyState
          title="No Appointments"
          message="Book your first appointment."
        />
      </Card>
    );
  }

  return (
    <Card title="Appointments">
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Department</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <AppointmentRow
              key={appointment.id}
              appointment={appointment}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default AppointmentList;