
import DoctorCard from "./DoctorCard";
import EmptyState from "../ui/EmptyState";

// [REQ-1] Render list using .map()

function DoctorList({
  doctors,
  selectedDoctorId,
  onSelectDoctor,
}) {
  if (doctors.length === 0) {
    return (
      <EmptyState
        title="No Doctors Found"
        message="Try changing the search or department."
      />
    );
  }

  return (
    <div className="doctor-grid">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          selectedDoctorId={selectedDoctorId}
          onSelectDoctor={onSelectDoctor}
        />
      ))}
    </div>
  );
}

export default DoctorList;