import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminDashboard() {
  const [helpers, setHelpers] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newService, setNewService] = useState({ title: "", description: "", price: 0, durationHours: 1 });

  const load = async () => {
    const h = await api.get("/api/admin/helpers");
    const s = await api.get("/api/services");
    const b = await api.get("/api/bookings");
    setHelpers(h.data);
    setServices(s.data);
    setBookings(b.data);
  };

  useEffect(() => { load(); }, []);

  const approve = async (id) => { await api.patch(`/api/admin/helpers/${id}/approve`); load(); };
  const block = async (id) => { await api.patch(`/api/admin/helpers/${id}/block`); load(); };
  const unblock = async (id) => { await api.patch(`/api/admin/helpers/${id}/unblock`); load(); };

  const addService = async () => {
    await api.post("/api/services", newService);
    setNewService({ title: "", description: "", price: 0, durationHours: 1 });
    load();
  };

  const removeService = async (id) => { await api.delete(`/api/services/${id}`); load(); };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Helpers</h2>
        <div className="space-y-2">
          {helpers.map(h => (
            <div key={h._id} className="bg-white border rounded p-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{h.name} ({h.email})</p>
                <p className="text-sm text-gray-600">Approved: {String(h.isApproved)} | Blocked: {String(h.isBlocked)}</p>
              </div>
              <div className="space-x-2">
                {!h.isApproved && <button onClick={() => approve(h._id)} className="px-3 py-1 bg-blue-600 text-white rounded">Approve</button>}
                {!h.isBlocked && <button onClick={() => block(h._id)} className="px-3 py-1 bg-red-600 text-white rounded">Block</button>}
                {h.isBlocked && <button onClick={() => unblock(h._id)} className="px-3 py-1 bg-green-600 text-white rounded">Unblock</button>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border rounded p-3">
            <h3 className="font-medium mb-2">Add Service</h3>
            <div className="space-y-2">
              <input className="w-full border rounded p-2" placeholder="Title" value={newService.title} onChange={e=>setNewService({ ...newService, title: e.target.value })} />
              <textarea className="w-full border rounded p-2" placeholder="Description" value={newService.description} onChange={e=>setNewService({ ...newService, description: e.target.value })} />
              <input className="w-full border rounded p-2" type="number" placeholder="Price" value={newService.price} onChange={e=>setNewService({ ...newService, price: Number(e.target.value) })} />
              <input className="w-full border rounded p-2" type="number" placeholder="Duration (hours)" value={newService.durationHours} onChange={e=>setNewService({ ...newService, durationHours: Number(e.target.value) })} />
              <button onClick={addService} className="px-3 py-1 bg-green-600 text-white rounded">Create</button>
            </div>
          </div>
          <div className="space-y-2">
            {services.map(s => (
              <div key={s._id} className="bg-white border rounded p-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{s.title} — ₹{s.price}</p>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
                <button onClick={() => removeService(s._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">All Bookings</h2>
        <div className="space-y-2">
          {bookings.map(b => (
            <div key={b._id} className="bg-white border rounded p-3">
              <p className="font-medium">{b.service?.title} — {new Date(b.date).toLocaleString()}</p>
              <p className="text-sm text-gray-600">Customer: {b.customer?.name} | Helper: {b.helper?.name} | Status: {b.status}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
