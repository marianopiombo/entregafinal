import NavBar from "./NavBar";
import LogoEna from "./LogoEna";

const Header = () => {
return (
    <div className="container-fluid bg-light">
    <div className="container my-3">
        <div className="row align-items-center">
        <div className="col-md-2">
            <LogoEna/>
        </div>
        <div className="col-md-8 text-center">
        <NavBar/>
        </div>
        </div>
    </div>
    </div>
);
};

export default Header;

