import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setLoading(false); return; }
    api.get("/api/auth/me").then(res => {
      setUser(res.data);
    }).catch(() => {
      localStorage.removeItem("token");
    }).finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/api/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    // fetch profile
    const me = await api.get("/api/auth/me");
    setUser(me.data);
    return me.data;
  };

  const register = async (payload) => {
    const res = await api.post("/api/auth/register", payload);
    localStorage.setItem("token", res.data.token);
    const me = await api.get("/api/auth/me");
    setUser(me.data);
    return me.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }
