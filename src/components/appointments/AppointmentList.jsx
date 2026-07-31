import { useMemo, useState } from "react";
import Card from "../ui/Card";
import EmptyState from "../ui/EmptyState";
import AppointmentRow from "./AppointmentRow";

// [REQ-1] list with .map() + stable key

const STATUS_FILTERS = [
  "All",
  "Pending",
  "Confirmed",
  "Completed",
  "Cancelled",
];

function AppointmentList({ appointments, onStatusChange, onDelete }) {
  const [statusFilter, setStatusFilter] = useState("All");

  // count for each status chip
  const counts = useMemo(() => {
    const result = {
      All: appointments.length,
      Pending: 0,
      Confirmed: 0,
      Completed: 0,
      Cancelled: 0,
    };

    appointments.forEach((item) => {
      if (result[item.status] !== undefined) {
        result[item.status] += 1;
      }
    });

    return result;
  }, [appointments]);

  // filtered list (newest first already comes from App)
  const filtered = useMemo(() => {
    if (statusFilter === "All") return appointments;
    return appointments.filter((item) => item.status === statusFilter);
  }, [appointments, statusFilter]);

  return (
    <Card
      title="Appointments"
      action={
        <span className="count-badge">{appointments.length}</span>
      }
    >
      {/* Status filter chips */}
      <div className="filter-chips">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            type="button"
            className={`chip ${statusFilter === status ? "active" : ""}`}
            onClick={() => setStatusFilter(status)}
          >
            {status} ({counts[status]})
          </button>
        ))}
      </div>

      {/* Empty state — ternary (REQ-2a) */}
      {filtered.length === 0 ? (
        <EmptyState
          title="No appointments yet"
          message="Book the first one from the form."
        />
      ) : (
        <div className="table-wrapper">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>PATIENT</th>
                <th>DOCTOR</th>
                <th>DATE & TIME</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((appointment) => (
                <AppointmentRow
                  key={appointment.id}
                  appointment={appointment}
                  onStatusChange={onStatusChange}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

export default AppointmentList;