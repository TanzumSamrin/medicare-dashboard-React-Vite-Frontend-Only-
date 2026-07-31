import { useMemo, useState } from "react";

import Card from "../ui/Card";
import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";

// [REQ-3] Lifting state up:
// selectedDoctorId lives in App and is shared by
// DoctorPanel -> DoctorList -> DoctorCard
// and later AppointmentForm.

function DoctorPanel({
  doctors,
  selectedDoctorId,
  onSelectDoctor,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  // Generate department chips dynamically
  const departments = useMemo(() => {
    const uniqueDepartments = [
      ...new Set(
        doctors.map((doctor) => doctor.department)
      ),
    ];

    return ["All", ...uniqueDepartments];
  }, [doctors]);

  // Search + Department Filter
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesDepartment =
      selectedDepartment === "All" ||
      doctor.department === selectedDepartment;

    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesSearch;
  });

  return (
    <Card title="Doctors">
      <DoctorFilter
        departments={departments}
        selectedDepartment={selectedDepartment}
        searchTerm={searchTerm}
        onDepartmentChange={setSelectedDepartment}
        onSearchChange={setSearchTerm}
      />

      <DoctorList
        doctors={filteredDoctors}
        selectedDoctorId={selectedDoctorId}
        onSelectDoctor={onSelectDoctor}
      />
    </Card>
  );
}

export default DoctorPanel;