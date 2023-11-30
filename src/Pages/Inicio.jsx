import InicioCarousel from "../Components/InicioCarousel";

import InicioHero from "../Components/InicioHero";
import SegundoHero from "../Components/SegundoHero";

const Inicio = () => { 
    return(
        <>
        
        <InicioCarousel/>
        <div>
            <h2 className="text-center">
            La salud mental es un aspecto crucial de nuestras vidas que merece la misma atención y cuidado que la salud física.
            <br /> La salud mental engloba el estado de equilibrio y bienestar de nuestro ser emocional, psicológico y social,
            <br /> moldeando nuestra percepción, emociones y conducta en la confrontación de los desafíos de la vida
            </h2>

        </div>
       <InicioHero/>
       <SegundoHero/>
       

        </>
    )
    
     }
     export default Inicio;