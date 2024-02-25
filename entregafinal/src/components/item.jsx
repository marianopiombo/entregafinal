import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card border-0">
                <Link  to = {"/item/"  + item.id}  className="text-decoration-none fw-semibold"  >
                    <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
                    <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;