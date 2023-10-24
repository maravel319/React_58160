import './ItemCount.css';
import {useState} from 'react';

const ItemCount =({stock, initial, onAdd})=> {

const [quantity, setQuantity] = useState (inicial)
    
const increment = () => {
    if (quantity<stock) {
        setQuantity (quantity+1)
    }
} 

const decrement = () => {
    if (quantity>1) {
        setQuantity (quantity-1)
    }
}
    return(
    <div className= 'Counter'>
        <div className = 'Controls'>
            <button className='button' onClik={decrement}>-</button> 
            <h4 clssName='numbre'>(Quantity)</h4>
            <button className='button' onClik={increment}>+</button> 
        </div>
        <div>
            <button className='button' onClick={()=> onAdd(quantity)} disabled={!stock}>
            Agregar al carrito            
            </button> 
        </div>
    </div>
    )
}

