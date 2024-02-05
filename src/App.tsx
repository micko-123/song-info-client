import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import DisplayStats from "./components/Stats/DisplayStats";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import  store  from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-song" element={<Form />} />
          <Route path="/stats" element={<DisplayStats />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
