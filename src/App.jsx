import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPhoto from "./pages/AddPhoto";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="bg-MainBg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPhoto" element={<AddPhoto />} />
      </Routes>
    </div>
  );
}
export default App;
