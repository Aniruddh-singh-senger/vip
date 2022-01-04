import { Route, Routes } from "react-router-dom";
import Apartment from "./Apartment";
import Building from "./Building";
import Home from "./Home";
import Location from "./Location";
import Navbar from "./Navbar";
import Startpage  from './Startpage'


const Vip = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
      <Routes>
     <Route path="/Home" element={<Home />} />
     <Route path="/Building" element={<Building />} />
     <Route path="/Building/:id" element={<Startpage />} />
     <Route path="/Apartment" element={<Apartment />} />
     <Route path="/Location" element={<Location />} />
     </Routes>
      </div>
    </div>
  );
};

export default Vip;