import { useEffect, useState } from "react";

import Button from "../ui/Button";
import FormField from "./FormField";

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
}) {
  const [formData, setFormData] =
    useState(initialForm);

  const [errors, setErrors] = useState({});

  // Auto select doctor
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
      label: doctor.name,
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
      patientName: validatePatientName(
        formData.patientName
      ),
      phone: validatePhone(formData.phone),
      doctorId: validateDoctor(
        formData.doctorId
      ),
      date: validateDate(formData.date),
      time: validateTime(formData.time),
      note: validateNote(formData.note),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(
      Boolean
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onAddAppointment(formData);

    setFormData(initialForm);

    setErrors({});
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
        label="Appointment Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        error={errors.date}
        required
      />

      <FormField
        label="Appointment Time"
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
        error={errors.time}
        required
      />

      <FormField
        label="Notes"
        name="note"
        type="textarea"
        value={formData.note}
        onChange={handleChange}
        error={errors.note}
        placeholder="Optional"
      />

      <Button type="submit">
        Book Appointment
      </Button>

    </form>
  );
}

export default AppointmentForm;