import Card from "../ui/Card";
import EmptyState from "../ui/EmptyState";
import AppointmentRow from "./AppointmentRow";

// [REQ-1] Rendering using map() with stable key

function AppointmentList({ appointments, onStatusChange, onDelete }) {
  if (!appointments.length) {
    return (
      <Card title="Appointments">
        <EmptyState
          title="No appointments yet"
          message="Book the first one from the form."
        />
      </Card>
    );
  }

  return (
    <Card title="Appointments">
      <table className="appointment-table">
        <thead>
          <tr>
            <th>PATIENT</th>
            <th>DOCTOR</th>
            <th>DATE & TIME</th>
            <th>STATUS</th>
            <th>CHANGE</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <AppointmentRow
              key={appointment.id}
              appointment={appointment}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default AppointmentList;