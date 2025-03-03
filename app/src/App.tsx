import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HealthHackLanding from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthHackLanding />} />
      </Routes>
    </Router>
  );
}

export default App;