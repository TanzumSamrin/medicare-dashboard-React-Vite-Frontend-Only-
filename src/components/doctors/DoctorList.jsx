import DoctorCard from "./DoctorCard";
import EmptyState from "../ui/EmptyState";

// REQ-1
// Rendering using map()

function DoctorList({
  doctors,
  selectedDoctor,
  onSelectDoctor,
}) {
  if (doctors.length === 0) {
    return (
      <EmptyState
        title="No Doctors Found"
        message="Try another search or department."
      />
    );
  }

  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          isSelected={
            selectedDoctor?.id === doctor.id
          }
          onSelectDoctor={onSelectDoctor}
        />
      ))}
    </div>
  );
}

export default DoctorList;