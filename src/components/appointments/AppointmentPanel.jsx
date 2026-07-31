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
    <>
      <Card title="Book New Appointment">
        <AppointmentForm
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          onAddAppointment={onAddAppointment}
          onResetDoctor={onResetDoctor}
        />
      </Card>

      <div style={{ marginTop: "24px" }}>
        <AppointmentList
          appointments={appointments}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      </div>
    </>
  );
}

export default AppointmentPanel;