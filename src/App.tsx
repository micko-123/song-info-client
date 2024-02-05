import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import DisplayStats from "./components/Stats/DisplayStats";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-song" element={<Form />} />
          <Route path="/stats" element={<DisplayStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
