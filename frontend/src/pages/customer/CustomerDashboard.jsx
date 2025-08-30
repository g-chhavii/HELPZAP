import { useEffect, useState } from "react";
import api from "../../api/axios";
import ServiceCard from "../../components/ServiceCard";

export default function CustomerDashboard() {
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");
  const [my, setMy] = useState([]);

  useEffect(() => {
    api.get("/api/services").then(res => setServices(res.data));
    api.get("/api/bookings").then(res => setMy(res.data));
  }, []);

  const onBook = async (service) => {
    setMessage("");
    const inThreeHours = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString();
    try {
      const res = await api.post("/api/bookings", { service: service._id, date: inThreeHours, hours: service.durationHours, address: "Customer Address" });
      setMessage("Booked successfully!");
      const latest = await api.get("/api/bookings");
      setMy(latest.data);
    } catch (e) {
      setMessage(e.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Customer Dashboard</h1>
      {message && <div className="p-2 rounded bg-yellow-100 text-yellow-800">{message}</div>}
      <section>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map(s => <ServiceCard key={s._id} service={s} onBook={onBook} />)}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">My Bookings</h2>
        <div className="space-y-2">
          {my.map(b => (
            <div key={b._id} className="bg-white border rounded p-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{b.service?.title}</p>
                <p className="text-sm text-gray-600">Helper: {b.helper?.name || "TBD"} | {new Date(b.date).toLocaleString()} | {b.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
