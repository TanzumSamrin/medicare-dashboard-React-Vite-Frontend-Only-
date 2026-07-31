import Card from "../ui/Card";
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";

function AppointmentPanel({
  doctors,
  selectedDoctor,
  appointments,
  onAddAppointment,
  onStatusChange,
  onDelete,
  onResetDoctor,
}) {
  return (
    <div className="appointment-panel">
      <Card title="Book New Appointment">
        <AppointmentForm
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          onAddAppointment={onAddAppointment}
          onResetDoctor={onResetDoctor}
        />
      </Card>

      <div className="appointments-list-wrap">
        <AppointmentList
          appointments={appointments}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default AppointmentPanel;