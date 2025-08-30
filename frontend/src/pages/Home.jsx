import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    api.get("/api/services").then(res => setServices(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1164]">
      <div className="max-w-5xl mx-auto p-6 text-white">
        <h1 className="text-3xl font-extrabold mb-8 text-center tracking-wide">
          Available Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s._id}
              className="bg-[#3B38A0] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-bold mb-2">{s.title}</h2>
              <p className="text-base font-medium mb-2">{s.description}</p>
              <p className="text-lg font-semibold">₹{s.price}</p>
              <p className="text-sm mt-1">Duration: {s.durationHours} hrs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
