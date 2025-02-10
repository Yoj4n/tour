import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../src/components/Footer";
import Home from "../src/views/Home";
import About from "../src/views/About";
import Destinations from "../src/views/Destinations";
import Packages from "../src/views/Packages";
import Contact from "../src/views/Contact";
import Navbar from "../src/components/Navbar.js";
import Login from "../src/components/Login.js";
import NotFound from "./components/NotFound.js";
import ProtectedRoute from "../src/components/Perfil/ProtectedRoute.js";
import InfoTuristica from "../src/views/InfoTuristica.js";
import VistaDetalle from "./views/VistaDetalle.js";
import Cart from "./views/Cart.js";
// import ContactForm from './components/Contact/ContactoFrom.js';
import Reserva from "./views/Reserva.js";
import Perfil from "./views/Perfil.js";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path='/vistaDetalle' element={<VistaDetalle/>}/> */}
          <Route path="/detalle/:id" element={<VistaDetalle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/infoTuristica" element={<InfoTuristica />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<Perfil />} />
          </Route>

          
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
