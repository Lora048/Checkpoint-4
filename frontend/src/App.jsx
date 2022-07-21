import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
