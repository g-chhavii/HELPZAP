import { useEffect, useState } from "react";
import axios from "axios";

export default function HelperDashboard() {
  const [services, setServices] = useState([]);

  // NEW EDIT: fetch helper profile with services
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setServices(res.data.services || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">My Services</h2>
      <ul>
        {services.map(s => (
          <li key={s._id} className="border-b p-2">{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
