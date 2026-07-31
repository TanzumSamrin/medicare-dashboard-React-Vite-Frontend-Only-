import Button from "../ui/Button";

function DoctorFilter({
  searchTerm,
  selectedDepartment,
  departments,
  onSearchChange,
  onDepartmentChange,
}) {
  return (
    <div className="doctor-filter">
      <input
        type="text"
        className="search-input"
        placeholder="Search doctor by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className="department-list">
        {departments.map((department) => (
          <Button
            key={department}
            variant={
              selectedDepartment === department
                ? "primary"
                : "secondary"
            }
            onClick={() => onDepartmentChange(department)}
          >
            {department}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DoctorFilter;