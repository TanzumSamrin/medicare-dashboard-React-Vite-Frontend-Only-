export function validatePatientName(name) {
  if (!name.trim()) {
    return "Patient name is required.";
  }

  if (name.trim().length < 3) {
    return "Patient name must be at least 3 characters.";
  }

  return "";
}

export function validatePhone(phone) {
  const regex = /^01\d{9}$/;

  if (!phone.trim()) {
    return "Phone number is required.";
  }

  if (!regex.test(phone)) {
    return "Enter a valid 11-digit phone number.";
  }

  return "";
}

export function validateDoctor(doctorId) {
  if (!doctorId) {
    return "Please select a doctor.";
  }

  return "";
}

export function validateDate(date) {
  if (!date) {
    return "Appointment date is required.";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(date);

  if (selectedDate < today) {
    return "Appointment date cannot be in the past.";
  }

  return "";
}

export function validateTime(time) {
  if (!time) {
    return "Please select a time.";
  }

  return "";
}

export function validateNote(note) {
  if (note.length > 200) {
    return "Note cannot exceed 200 characters.";
  }

  return "";
}