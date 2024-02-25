import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./itemList";
import Carrousel from "./carrousel";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from "./loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); 


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <>
            {id ? "" : <Carrousel />}
            {loading ? <Loading/> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;