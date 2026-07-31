function DoctorFilter({
  departments,
  selectedDepartment,
  searchTerm,
  onDepartmentChange,
  onSearchChange,
}) {
  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search doctor..."
        value={searchTerm}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
      />

      <div className="filter-chips">
        {departments.map((department) => (
          <button
            key={department}
            type="button"
            className={
              selectedDepartment === department
                ? "chip active-chip"
                : "chip"
            }
            onClick={() =>
              onDepartmentChange(department)
            }
          >
            {department}
          </button>
        ))}
      </div>
    </>
  );
}

export default DoctorFilter;