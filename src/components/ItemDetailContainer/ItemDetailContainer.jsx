import {useState, useEffect} from 'react';
import {getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState (null)

const {itemId}=useParams()

    useEffect ( () => {
    getProductById(itemId)
    .then (response => {
        setProduct (response)
    })
        
    }, [itemId])

if(!product) {
    return <h1>No existe</h1>
}
return(
    <div className='iItemDetailContainer'>
        <h1>Detalle de producto</h1> 
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer