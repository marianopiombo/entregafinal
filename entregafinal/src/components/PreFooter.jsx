import LogoPreFooter from "../assets/imagenes/laboratorio_ena_Sin_Fondo_900x.webp"

const PreFooter = () =>{
    return(
        <div className="container-fluid bg-warning my-3">
            <div className="row">
                <div className="col">
                    <img src={LogoPreFooter} alt="Laboratorio Logo" width={1000} />
                </div>
                <div className="col-md-5 ">
                <h2>Una marca de Laboratorio ENA</h2>
                <p>
                Laboratorio ENA produce los suplementos de más alto nivel y eficacia, bajo los más estrictos estándares de calidad, sanidad y bioseguridad; contribuyendo a una mejor calidad de vida.
                </p>
                </div>
            </div>
        </div>
    )
}

export default PreFooter;