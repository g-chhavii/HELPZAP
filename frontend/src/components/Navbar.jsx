import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <Link to="/" className="font-semibold text-lg">ServiceApp</Link>
      <div className="space-x-3">
        {!user && (<>
          <Link to="/login" className="px-3 py-1 rounded bg-blue-600 text-white">Login</Link>
          <Link to="/register" className="px-3 py-1 rounded border">Register</Link>
        </>)}
        {user && (<>
          {user.role === "admin" && <Link to="/admin" className="px-3 py-1 rounded border">Admin</Link>}
          {user.role === "helper" && <Link to="/helper" className="px-3 py-1 rounded border">Helper</Link>}
          {user.role === "customer" && <Link to="/customer" className="px-3 py-1 rounded border">Customer</Link>}
          <button onClick={() => { logout(); navigate("/"); }} className="px-3 py-1 rounded bg-gray-800 text-white">Logout</button>
        </>)}
      </div>
    </nav>
  );
}
