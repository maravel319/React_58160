import {useState, useEffect} from 'react';
import {getProducts} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer=({greetings}) => {
    const [products, setProducts] = useState([])

    useEffect (() =>{
        getProducts ()
        .then(response =>{
            setProducts (response)
        })
        .catch(error =>{
            console.error(error)
        })
}, [])

    return(
        <div>
        <h1> {greetings}</h1>
        </div>
        )
}

export default ItemListContainer
