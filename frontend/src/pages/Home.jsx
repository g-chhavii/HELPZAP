import { useEffect, useState } from "react";
import api from "../api/axios";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    api.get("/api/services").then(res => setServices(res.data));
  }, []);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Available Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(s => <ServiceCard key={s._id} service={s} />)}
      </div>
    </div>
  );
}
