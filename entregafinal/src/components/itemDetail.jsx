import { useContext } from "react";
import ItemCount from "./itemCount";
import { CartContext } from "./Context/CartContext";

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext);
    
    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1  text-align-center">
                    <img src={item.image} alt={item.title} className="img-fluid "/>
                </div>
                <div className="col-md-4">
                <h1> {item.nombre} </h1>
                <p> {item.description} </p>
                <p className="fw-bolder"> ${item.precio } </p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;