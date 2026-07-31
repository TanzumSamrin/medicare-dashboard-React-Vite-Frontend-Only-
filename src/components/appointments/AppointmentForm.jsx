import { useEffect, useState } from "react";

import Button from "../ui/Button";
import FormField from "./AppointmentFormField";

import {
  validatePatientName,
  validatePhone,
  validateDoctor,
  validateDate,
  validateTime,
  validateNote,
} from "../../utils/validators";

const initialForm = {
  patientName: "",
  phone: "",
  doctorId: "",
  date: "",
  time: "",
  note: "",
};

function AppointmentForm({
  doctors,
  selectedDoctor,
  onAddAppointment,
  onResetDoctor, // doctor selection clear করার জন্য
}) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  // Auto select doctor when card is clicked
  useEffect(() => {
    if (selectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        doctorId: String(selectedDoctor.id),
      }));
    }
  }, [selectedDoctor]);

  const doctorOptions = doctors
    .filter((doctor) => doctor.available)
    .map((doctor) => ({
      value: String(doctor.id),
      label: `${doctor.name} — ${doctor.department}`,
    }));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      patientName: validatePatientName(formData.patientName),
      phone: validatePhone(formData.phone),
      doctorId: validateDoctor(formData.doctorId),
      date: validateDate(formData.date),
      time: validateTime(formData.time),
      note: validateNote(formData.note),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  // REQ-10: form submit handling
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onAddAppointment(formData);

    // form reset after successful booking
    setFormData(initialForm);
    setErrors({});
  };

  // Reset button — form + doctor selection clear
  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    if (onResetDoctor) {
      onResetDoctor();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Patient Name"
        name="patientName"
        value={formData.patientName}
        onChange={handleChange}
        error={errors.patientName}
        required
      />

      <FormField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
        placeholder="01XXXXXXXXX"
      />

      <FormField
        label="Doctor"
        name="doctorId"
        type="select"
        value={formData.doctorId}
        options={doctorOptions}
        onChange={handleChange}
        error={errors.doctorId}
        required
      />

      <FormField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        error={errors.date}
        required
      />

      <FormField
        label="Time"
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
        error={errors.time}
        required
      />

      <FormField
        label="Note"
        name="note"
        type="textarea"
        value={formData.note}
        onChange={handleChange}
        error={errors.note}
        placeholder="Write a short note... (max 200 characters)"
      />

      {/* Book + Reset buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
        <Button type="submit">Book Appointment</Button>

        <Button type="button" variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}

export default AppointmentForm;