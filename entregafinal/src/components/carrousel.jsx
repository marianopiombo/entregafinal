import Banner1 from "../assets/imagenes/banner1.webp"
import Banner2 from "../assets/imagenes/banner2.webp"
import Banner3 from "../assets/imagenes/banner3.webp"
import Banner4 from "../assets/imagenes/banner4.webp"

const Carrousel = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                        <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="Banner1"/>
                        </div>
                        <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="Banner2"/>
                        </div>
                        <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="Banner3"/>
                        </div>
                        <div className="carousel-item">
                        <img src={Banner4} className="d-block w-100" alt="Banner4"/>
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        

    )



}

export default Carrousel;