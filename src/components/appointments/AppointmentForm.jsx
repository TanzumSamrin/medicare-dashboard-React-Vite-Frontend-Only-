import { useEffect, useState } from "react";

import Card from "../ui/Card";
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

function AppointmentForm({
  doctors,
  selectedDoctorId,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    doctorId: "",
    date: "",
    time: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  // Auto select doctor from Doctor Panel
  useEffect(() => {
    if (selectedDoctorId) {
      setFormData((prev) => ({
        ...prev,
        doctorId: String(selectedDoctorId),
      }));
    }
  }, [selectedDoctorId]);

  const doctorOptions = doctors.map((doctor) => ({
  value: String(doctor.id),
  label: doctor.name,
}));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    return !Object.values(newErrors).some(
      (error) => error
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formData);
  };

  return (
    <Card title="Book Appointment">
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
          onChange={handleChange}
          options={doctorOptions}
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
          placeholder="Write additional notes..."
        />

        <Button type="submit">
          Book Appointment
        </Button>

      </form>
    </Card>
  );
}

export default AppointmentForm;