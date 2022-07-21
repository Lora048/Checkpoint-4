import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
