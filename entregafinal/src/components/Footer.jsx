import appAple from "../assets/imagenes/appstore.png"
import Android from "../assets/imagenes/googleplay.png"

const Footer = () => {
    return(
<div className="container-fluid ">
            <div className="row">
                <div className="col">
                    <h6>ACERCA DE ENA SPORT</h6>
                    <p>Somos una marca de suplementos deportivos que busca la excelencia en todo lo que hace. Nuestra misión es apoyar el crecimiento de los atletas en todas las etapas de su vida deportiva y cualesquiera sean sus objetivos.</p>
                    </div>
                    <div className="col-md-5 ">
                        <h5 className="text-center">SPONSORS</h5>
                        <h6 className="text-center">Union Argentina de Rugby</h6>
                    </div>
                    <div className="col">
                    <h5>Novedades</h5>
                    <p>Deja tu correo electrónico para que nos contactemos con las últimas novedades</p>
                    </div>
                    <div className="col">
                    <a href="#"className="mx-3"><img src={appAple} width={115}/></a>
                    <a href="#"><img src={Android} width={120}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
