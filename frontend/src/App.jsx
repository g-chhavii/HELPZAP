import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import HelperDashboard from "./pages/helper/HelperDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/customer" element={
              <ProtectedRoute roles={["customer"]}><CustomerDashboard /></ProtectedRoute>
            } />
            <Route path="/helper" element={
              <ProtectedRoute roles={["helper"]}><HelperDashboard /></ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute roles={["admin"]}><AdminDashboard /></ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}
