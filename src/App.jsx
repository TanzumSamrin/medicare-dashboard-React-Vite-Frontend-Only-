
import { useState } from "react";

import "./index.css";

import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";

import StatGrid from "./components/stats/StatGrid";
import DoctorPanel from "./components/doctors/DoctorPanel";

import { doctors as doctorData } from "./data/doctors";
import { appointments as appointmentData } from "./data/appointments";

// [REQ-3] Lifting state up:
// selectedDoctorId and appointments state live in App
// and are shared with child components.

function App() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const [appointments, setAppointments] =
    useState(appointmentData);

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctorId(doctorId);
  };

  return (
    <PageContainer>
      <Header />

      <StatGrid
        doctors={doctorData}
        appointments={appointments}
      />

      <div className="main-grid">
        <DoctorPanel
          doctors={doctorData}
          selectedDoctorId={selectedDoctorId}
          onSelectDoctor={handleSelectDoctor}
        />

        <div>
          <h2>Appointment Form</h2>
          <p>
            Appointment Form will be added in the next
            step.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

export default App;