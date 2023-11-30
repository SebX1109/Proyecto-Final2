import Imagenes from "../assets/img1.jpg"
import Imagenes2 from "../assets/img2.jpg"
import Imagenes3 from "../assets/img4.png"
import Imagenes4 from "../assets/img5.png"
import Imagenes5 from "../assets/img6.jpg"


const InicioCarousel = () => {

    return (
        <>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imagenes} className="rounded mx-auto d-block" width="50%" alt="auto" />
                        <div className="row justify-content-center">
                            <div className="col-sm-8"></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagenes2} className="rounded mx-auto d-block" width="50%" alt="auto" />
                        <div className="row justify-content-center">
                            <div className="col-sm-8"></div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={Imagenes3} className="rounded mx-auto d-block" width="50%" alt="auto" />
                        <div className="row justify-content-center">
                            <div className="col-sm-8"></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagenes4} className="rounded mx-auto d-block" width="50%" alt="auto" />
                        <div className="row justify-content-center">
                            <div className="col-sm-8"></div>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <img src={Imagenes5} className="rounded mx-auto d-block" width="50%" alt="auto" />
                        <div className="row justify-content-center">
                            <div className="col-sm-8"></div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



        </>


    )

}
export default InicioCarousel;