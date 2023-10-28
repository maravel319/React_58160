import {useState, useEffect} from 'react';
import {getProducts, getProductByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";

    const ItemListContainer = ({ greetings }) =>{
        const [products, setProducts] = useState([])
    
        const { categoryId } = useParams()
        console.log(categoryId)
    
        useEffect(() => {
            const asyncFunction = categoryId ? getProductByCategory : getProduct
    
            asyncFunction(categoryId)
                .then(response =>{
                    setProducts(response)
                })
        }, [categoryId])

    return(
        <div>
        <h1> {greetings}</h1>
        <ItemList products={products}/>
</div>
    )}


export default ItemListContainer
