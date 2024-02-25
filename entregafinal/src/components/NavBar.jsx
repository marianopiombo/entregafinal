import { NavLink } from "react-router-dom";
import CarWidget from "./CarWidget";
import LogoEna from "./LogoEna";

const NavBar = () =>{
    return(
        <div className="container-fluid bg-light">
        <div className="container my-3">
            <div className="row align-items-center">
            <div className="col-md-2">
                <LogoEna/>
            </div>
            <div className="col-md-8 text-center">
                <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5 " aria-current="page" to= {"/category/proteina"}>Proteina</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" to = {"/category/creatina"}>Creatina</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" to = {"/category/energia"}>Energia</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark fs-5" to = {"/PreFooter"}>Sobre Nosotros</NavLink>
            </li>
            </ul>
            </div>
            <div className="col-md-2 align-items-center justify-content-end">
        <CarWidget/>
        </div>
            </div>
        </div>
        </div>
    )
}

export default NavBar;
