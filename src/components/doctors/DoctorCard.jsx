import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

// [REQ-4] Passing callback prop

function DoctorCard({
  doctor,
  selectedDoctorId,
  onSelectDoctor,
}) {
  const isSelected = selectedDoctorId === doctor.id;

  return (
    <div
      className={`doctor-card ${
        isSelected ? "doctor-selected" : ""
      }`}
    >
      <Card
        title={doctor.name}
        action={
          doctor.available ? (
            <Badge variant="completed">
              Available
            </Badge>
          ) : (
            <Badge variant="cancelled">
              Not Available
            </Badge>
          )
        }
      >
        <p>
          <strong>Department:</strong>{" "}
          {doctor.department}
        </p>

        <p>
          <strong>Specialization:</strong>{" "}
          {doctor.specialization}
        </p>

        <p>
          <strong>Visiting Fee:</strong> ৳
          {doctor.visitingFee}
        </p>

        <Button
          disabled={!doctor.available}
          onClick={() => onSelectDoctor(doctor.id)}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
      </Card>
    </div>
  );
}

export default DoctorCard;