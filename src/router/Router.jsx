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
          <Route path="/principal" element={<Principal />} />
          <Route path="/descubre" element={<Descubre />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        </BrowserRouter> 
    );
}

export default Router;