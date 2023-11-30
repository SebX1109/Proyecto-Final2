import { Link } from "react-router-dom";
import Logo from "../assets/virgo.gif"
const SegundoHero = () => { 
    return(
        <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="110" height="auto"/>
    <h1 className="display-5 fw-bold text-body-emphasis">¿Por qué la mujer sufre más trastornos de salud mental?</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Ser mujer se considera un factor de riesgo cuando hablamos de salud mental. Para entender el porqué debemos antes pararnos a recordar que vivimos en una sociedad patriarcal y androcéntrica que deriva en desigualdades sociales desfavorables para las mujeres.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/nosotros"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Consulta </button></Link>
      <Link to="https://www.som360.org/es/monografico/mujer-salud-mental/articulo/mujer-sufre-mas-trastornos-salud-mental"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Saber mas...</button></Link>
      </div>
    </div>
  </div>
    )
 }
 export default SegundoHero;