import { useMemo, useState } from "react";

import Card from "../ui/Card";
import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";

// REQ-3
// Lifting State Up
// selectedDoctor state lives in App
// DoctorPanel receives it via props

function DoctorPanel({
  doctors,
  selectedDoctor,
  onSelectDoctor,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  // Dynamic Department List
  const departments = useMemo(() => {
    const unique = [
      ...new Set(
        doctors.map((doctor) => doctor.department)
      ),
    ];

    return ["All", ...unique];
  }, [doctors]);

  // Search + Filter
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const departmentMatch =
        selectedDepartment === "All" ||
        doctor.department ===
          selectedDepartment;

      const searchMatch = doctor.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return departmentMatch && searchMatch;
    });
  }, [
    doctors,
    searchTerm,
    selectedDepartment,
  ]);

  return (
    <Card title="Doctors">
      <DoctorFilter
        searchTerm={searchTerm}
        selectedDepartment={
          selectedDepartment
        }
        departments={departments}
        onSearchChange={setSearchTerm}
        onDepartmentChange={
          setSelectedDepartment
        }
      />

      <DoctorList
        doctors={filteredDoctors}
        selectedDoctor={selectedDoctor}
        onSelectDoctor={onSelectDoctor}
      />
    </Card>
  );
}

export default DoctorPanel;