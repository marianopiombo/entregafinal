import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import trash3 from "../assets/imagenes/trash3.svg"



const Cart = () => {
    const {cart, removeItem,  CantTotalProductos, SumaTotalProductos,clear} = useContext(CartContext);

    

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">Carrito Vacio</div>
                        <Link to={"/"} className="btn btn-warning my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos En Carrito</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                <tr>
                                <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} className="btn btn-danger">Vaciar Carrito <img src={trash3} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.image} alt={product.nombre} width={100} /></td>
                                        <td>{product.nombre}</td>
                                        <td>${product.precio}</td>
                                        <td>{product.cantidad}</td>
                                        <td>${product.cantidad * product.precio}</td>
                                        <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash3} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-center align-middle"  colSpan={4}>Precio Final</td>
                                    <td className="text-start align-middle" >${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Checkout</Link></td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;