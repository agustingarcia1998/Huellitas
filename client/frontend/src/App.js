import "./App.css";
import FormCreate from "./components/FormCreate/FormCreate";
import Home from "./components/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formCreate" element={<FormCreate />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
