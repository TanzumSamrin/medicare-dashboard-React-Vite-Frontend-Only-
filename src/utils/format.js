export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-BD", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatTime(time) {
  return time;
}

export function getDoctorName(doctors, doctorId) {
  const doctor = doctors.find((item) => item.id === doctorId);

  return doctor ? doctor.name : "Unknown Doctor";
}

export function getDoctorDepartment(doctors, doctorId) {
  const doctor = doctors.find((item) => item.id === doctorId);

  return doctor ? doctor.department : "";
}