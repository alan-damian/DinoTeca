import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import NavBar from "../components/NavBar";
import Principal from "../views/Principal";
import Descubre from "../views/Descubre";
import Contacto from "../views/Contacto";
import Info from "../views/Info";

const Router = ()=>{
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/DinoTeca" element={<Principal />} />
          <Route path="/DinoTeca/descubre" element={<Descubre />} />
          <Route path="/DinoTeca/contacto" element={<Contacto />} />
          <Route path="/DinoTeca/info" element={<Info />} />
        </Routes>
        </BrowserRouter> 
    );
}

export default Router;