import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import UpdateItem from "./components/UpdateItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/update/:id" element={<UpdateItem />} />  {/* Update page */}
        <Route path="*" element={<Navigate to="/" />} />  {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
