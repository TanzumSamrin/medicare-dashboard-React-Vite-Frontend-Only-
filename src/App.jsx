import { useState } from "react";

import "./index.css";

import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";

import StatGrid from "./components/stats/StatGrid";
import DoctorPanel from "./components/doctors/DoctorPanel";

import { doctors as initialDoctors } from "./data/doctors";
import { appointments as initialAppointments } from "./data/appointments";

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
        <div className="placeholder-panel">
          <h2>Appointment Module</h2>

          <p>
            Appointment Form will be connected in
            STEP-6.
          </p>

          {selectedDoctor && (
            <div className="selected-doctor-preview">
              <h3>Selected Doctor</h3>

              <p>
                <strong>Name:</strong>{" "}
                {selectedDoctor.name}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {selectedDoctor.department}
              </p>

              <p>
                <strong>Fee:</strong> ৳
                {selectedDoctor.visitingFee}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}

export default App;