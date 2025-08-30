import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";  // NEW EDIT

function App() {
  return (
    <Router>
      <Routes>
        {/* your existing routes */}
        <Route path="/register" element={<Register />} />  {/* NEW EDIT */}
      </Routes>
    </Router>
  );
}

export default App;
