import { Link } from "react-router-dom";
const Navbar = () => { 
    return(
        <>
        <nav className="navbar navbar-expand navbar bg" aria-label="Second navbar example">
    <div className="container-fluid">
      <Link to="/" className="btn btn-outline-primary">Inicio
      </Link>
      <Link to="/nosotros" className="btn btn-outline-primary">Nosotros
      </Link>
      <Link to="/contacto" className="btn btn-outline-primary">Contacto
      </Link>
        
    </div>
  </nav>
        </>
    )
 }
 export default Navbar;