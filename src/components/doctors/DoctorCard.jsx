import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

// REQ-2: Ternary Operator
// REQ-4: Callback Props

function DoctorCard({
  doctor,
  isSelected,
  onSelectDoctor,
}) {
  return (
    <div
      className={`doctor-card ${
        isSelected ? "doctor-card-selected" : ""
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
        <div className="doctor-info">

          <p>
            <strong>Department</strong>
          </p>

          <p>{doctor.department}</p>

          <p>
            <strong>Specialization</strong>
          </p>

          <p>{doctor.specialization}</p>

          <p>
            <strong>Visiting Fee</strong>
          </p>

          <p>৳ {doctor.visitingFee}</p>

        </div>

        <Button
          disabled={!doctor.available}
          onClick={() => onSelectDoctor(doctor)}
        >
          {isSelected ? "Selected" : "Select Doctor"}
        </Button>
      </Card>
    </div>
  );
}

export default DoctorCard;