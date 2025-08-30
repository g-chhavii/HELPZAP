import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-[#EFE4D2] shadow p-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-2xl">HELPZAP</Link>
      <div className="space-x-3">
        {!user && (<>
          <Link to="/login" className="px-3 py-2 rounded bg-[#FE7743] text-white font-bold text-lg">Login</Link>
          <Link to="/register" className="px-3 py-2 rounded border font-bold text-lg">Register</Link>
        </>)}
        {user && (<>
          {user.role === "admin" && <Link to="/admin" className="px-3 py-2 rounded border font-bold text-lg">Admin</Link>}
          {user.role === "helper" && <Link to="/helper" className="px-3 py-2 rounded border font-bold text-lg">Helper</Link>}
          {user.role === "customer" && <Link to="/customer" className="px-3 py-2 rounded border font-bold text-lg">Customer</Link>}
          <button 
            onClick={() => { logout(); navigate("/"); }} 
            className="px-3 py-2 rounded bg-[#FE7743] text-white font-bold text-lg"
          >
            Logout
          </button>
        </>)}
      </div>
    </nav>
  );
}
