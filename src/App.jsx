import { useState } from "react";
import "./index.css";

import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";

import StatGrid from "./components/stats/StatGrid";
import DoctorPanel from "./components/doctors/DoctorPanel";
import AppointmentPanel from "./components/appointments/AppointmentPanel";

import ErrorBoundary from "./components/error/ErrorBoundary";
import CrashTest from "./components/error/CrashTest";

import { doctors as initialDoctors } from "./data/doctors";
import { appointments as initialAppointments } from "./data/appointments";

// REQ-3
// Lifting state up:
// selectedDoctor & appointments live in App
// and are shared between DoctorPanel and AppointmentPanel.

function App() {

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [appointments, setAppointments] = useState(initialAppointments);

  const [shouldCrash, setShouldCrash] = useState(false);

  // REQ-4
  // Callback prop
  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // REQ-10
  // Form Submit Handler
  const handleAddAppointment = (formData) => {

    try {

      const doctor = initialDoctors.find(
        (d) => d.id === Number(formData.doctorId)
      );

      if (!doctor) return;

      const newAppointment = {
        id: Date.now(),
        patientName: formData.patientName,
        phone: formData.phone,
        doctorId: doctor.id,
        doctorName: doctor.name,
        department: doctor.department,
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

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

  };

  // REQ-4
  // Callback Prop
  const handleStatusChange = (id, status) => {

    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status,
            }
          : appointment
      )
    );

  };

  // REQ-10
  const handleDeleteAppointment = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) return;

    setAppointments((prev) =>
      prev.filter(
        (appointment) =>
          appointment.id !== id
      )
    );

  };

  return (

    <PageContainer>

      <Header
        onCrash={() => setShouldCrash(true)}
      />

      <StatGrid
        doctors={initialDoctors}
        appointments={appointments}
      />

      <div className="dashboard-layout">

        <DoctorPanel
          doctors={initialDoctors}
          selectedDoctor={selectedDoctor}
          onSelectDoctor={handleDoctorSelect}
        />

        <ErrorBoundary>

          <AppointmentPanel
            doctors={initialDoctors}
            appointments={appointments}
            selectedDoctor={selectedDoctor}
            onAddAppointment={handleAddAppointment}
            onStatusChange={handleStatusChange}
            onDelete={handleDeleteAppointment}
            onResetDoctor={() => setSelectedDoctor(null)}
          />

        </ErrorBoundary>

      </div>

      <CrashTest shouldCrash={shouldCrash} />

    </PageContainer>

  );
}

export default App;