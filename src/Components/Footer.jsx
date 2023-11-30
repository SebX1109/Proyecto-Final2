
import { Link } from "react-router-dom";
const Footer = () => { 
    return(
        <>
        <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">© 2023 Your Life Matters Company, Inc</p>

    <Link href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </Link>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Inicio</Link></li>
      <li class="nav-item"><Link to="/nosotros" class="nav-link px-2 text-body-secondary">Nosotros</Link></li>
      <li class="nav-item"><Link to="/contacto" class="nav-link px-2 text-body-secondary">Contacto</Link></li>
      
      
    </ul>
  </footer>
</div>
    
  
        </>
    )
 }
 export default Footer;