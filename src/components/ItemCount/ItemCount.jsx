import './ItemCount.css';
import {useState} from 'react';

const ItemCount =({stock, initial, onAdd})=> {
const [quantity, setQuantity] = useState (initial)
const increment = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    }
}
const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
}


(quantity)=> console.log('cantidad agregada: ' + quantity)
return(
    <div className= 'Counter'>
        <div className = 'Controls'> 
        <h1> Ya se ve →{quantity}←</h1>
        <button className='button' onClick={increment}>suma +</button> 
        <h4 className='number'>{quantity}</h4>
        <button className='button' onClick={decrement}>resta -</button> 

        </div>
        <div>
            <button className='button' onClick={()=> onAdd(quantity)} disabled={!stock}>
            Agregar al carrito            
            </button> 
        </div>
    </div>
    )
}
export default ItemCount