import { Link } from "react-router-dom";
import Contacto from "../Pages/Contacto";
import Logo from "../assets/escaneo-facial.gif"
const InicioHero = () => { 
    return(
        <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="110" height="auto"/>
    <h1 className="display-5 fw-bold text-body-emphasis">La salud mental en hombres.</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">¿Sabías que en la actualidad un hombre muere cada minuto por suicidio?
Los hombres, independientemente de su edad, no suelen reconocer que tienen un problema inherente a su salud mental y puede que no se sientan cómodos en pedir ayuda. La incómoda realidad es que algunos estereótipos de masculinidad matan a los hombres. Porque no les permiten pedir ayuda cuando la necesitan.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/nosotros"><button  type="button" className="btn btn-primary btn-lg px-4 gap-3">Consulta</button> </Link>
        <Link to="https://drborregales.com/salud-mental-masculina/"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Saber mas...</button></Link>
      </div>
    </div>
  </div>
    )
 }
 export default InicioHero;