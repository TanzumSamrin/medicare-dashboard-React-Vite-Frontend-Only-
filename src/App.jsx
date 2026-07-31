import { useState } from "react";

import "./index.css";

import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";

import StatGrid from "./components/stats/StatGrid";
import DoctorPanel from "./components/doctors/DoctorPanel";

import { doctors as initialDoctors } from "./data/doctors";
import { appointments as initialAppointments } from "./data/appointments";

import AppointmentPanel from "./components/appointments/AppointmentPanel";

// REQ-3
// Lifting State Up
// selectedDoctor & appointments state are shared
// between Doctor Module and Appointment Module.

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [appointments, setAppointments] = useState(
    initialAppointments
  );

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleAddAppointment = (formData) => {
  const selected = initialDoctors.find(
    (doctor) => doctor.id === Number(formData.doctorId)
  );

  const newAppointment = {
    id: Date.now(),
    patientName: formData.patientName,
    phone: formData.phone,
    doctorId: selected.id,
    doctorName: selected.name,
    department: selected.department,
    date: formData.date,
    time: formData.time,
    note: formData.note,
    status: "Pending",
  };

  setAppointments((prev) => [
    newAppointment,
    ...prev,
  ]);

  setSelectedDoctor(null);
};

const handleCompleteAppointment = (id) => {
  setAppointments((prev) =>
    prev.map((appointment) =>
      appointment.id === id
        ? {
            ...appointment,
            status: "Completed",
          }
        : appointment
    )
  );
};

const handleDeleteAppointment = (id) => {
  setAppointments((prev) =>
    prev.filter(
      (appointment) =>
        appointment.id !== id
    )
  );
};

  return (
    <PageContainer>
      <Header />

      <StatGrid
        doctors={initialDoctors}
        appointments={appointments}
      />

      <div className="dashboard-layout">
        {/* Left Side */}
        <DoctorPanel
          doctors={initialDoctors}
          selectedDoctor={selectedDoctor}
          onSelectDoctor={handleDoctorSelect}
        />

        {/* Right Side */}
        <AppointmentPanel
            doctors={initialDoctors}
            selectedDoctor={selectedDoctor}
            onAddAppointment={handleAddAppointment}
        />

        <AppointmentPanel
            doctors={initialDoctors}
            selectedDoctor={selectedDoctor}
            appointments={appointments}
            onAddAppointment={handleAddAppointment}
            onComplete={handleCompleteAppointment}
            onDelete={handleDeleteAppointment}
        />
      </div>
    </PageContainer>
  );
}

export default App;