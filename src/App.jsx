

import { Route, Routes } from "react-router-dom";






import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Inicio from "./Pages/Inicio";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => { 
  return(
    <>
    <Navbar/>
    <div className="col-sm-8  justify-content-center " >
      
      <h1 className="d-flex col-sm-8  justify-content-center "   ><strong><em>Your Life Matters</em></strong></h1>
      
      </div>
    <Routes>
      <Route element={<Inicio/>} path="/"></Route>
      <Route element={<Nosotros />} path="/nosotros"></Route>
      <Route element={<Contacto/>} path="/contacto"></Route>
      
    </Routes>
    <Footer/>
    </>
  )
 }
 export default App;