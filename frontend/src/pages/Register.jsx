import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    phone: "",
  });

  const [services, setServices] = useState([]); 
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState("");

  const { register: registerUser } = useAuth(); // from AuthContext
  const navigate = useNavigate();

  // Fetch available services
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Send registration data
      await axios.post("http://localhost:5000/api/auth/register", {
        ...form,
        services: form.role === "helper" ? selectedServices : [],
      });

      // Also update auth context
      const me = await registerUser(form);

      // Redirect based on role
      if (me.role === "admin") navigate("/admin");
      else if (me.role === "helper") navigate("/helper");
      else navigate("/customer");
    } catch (err) {
      setError(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Register</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-3">{error}</div>
      )}

      <form onSubmit={handleRegister} className="space-y-3">
        <input
          className="w-full border rounded p-2"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border rounded p-2"
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <select
          className="w-full border rounded p-2"
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="customer">Customer</option>
          <option value="helper">Helper</option>
        </select>

        {form.role === "helper" && (
          <div>
            <label className="block mb-1">
              Select Services (Ctrl+Click for multiple)
            </label>
            <select
              multiple
              className="w-full border rounded p-2"
              value={selectedServices}
              onChange={(e) =>
                setSelectedServices(
                  [...e.target.selectedOptions].map((o) => o.value)
                )
              }
            >
              {services.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded p-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
