import Card from "../ui/Card";
import AppointmentForm from "./AppointmentForm";

function AppointmentPanel({
  doctors,
  selectedDoctor,
  onAddAppointment,
}) {
  return (
    <Card title="Book Appointment">
      <AppointmentForm
        doctors={doctors}
        selectedDoctor={selectedDoctor}
        onAddAppointment={onAddAppointment}
      />
    </Card>
  );
}

export default AppointmentPanel;