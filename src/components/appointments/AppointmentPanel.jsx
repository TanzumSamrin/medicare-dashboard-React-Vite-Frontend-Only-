import Card from "../ui/Card";
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";

function AppointmentPanel({
  doctors,
  selectedDoctor,
  appointments,
  onAddAppointment,
  onComplete,
  onDelete,
}) {
  return (
        <>
    <Card title="Book Appointment">
        <AppointmentForm
        doctors={doctors}
        selectedDoctor={selectedDoctor}
        onAddAppointment={onAddAppointment}
        />
    </Card>

    <AppointmentList
        appointments={appointments}
        onComplete={onComplete}
        onDelete={onDelete}
    />

    <AppointmentList
        appointments={appointments}
        onComplete={onComplete}
        onDelete={onDelete}
    />
    </>
  );
}

export default AppointmentPanel;