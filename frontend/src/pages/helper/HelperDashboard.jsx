import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function HelperDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/api/bookings").then(res => setBookings(res.data));
  }, []);

  const markDone = async (id) => {
    await api.patch(`/api/bookings/${id}/status`, { status: "completed" });
    const res = await api.get("/api/bookings");
    setBookings(res.data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Helper Dashboard</h1>
      {bookings.map(b => (
        <div key={b._id} className="bg-white border rounded p-3 flex items-center justify-between">
          <div>
            <p className="font-medium">{b.service?.title}</p>
            <p className="text-sm text-gray-600">Customer: {b.customer?.name} | {new Date(b.date).toLocaleString()}</p>
            <p className="text-sm">Status: {b.status}</p>
          </div>
          {b.status !== "completed" && <button onClick={() => markDone(b._id)} className="px-3 py-1 rounded bg-green-600 text-white">Mark Completed</button>}
        </div>
      ))}
    </div>
  );
}
