import { useContext } from 'react'
import { useCart } from '../../context/CartContext'



import carrito from './recursos/01.svg'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
            <button style={{ display: 'flex', flexDirection: 'column', backgroundColor:'#004173',  }}>
            <img style={{ width: '60px' }} src={carrito}/>
            {totalQuantity}
            </button>
    )
}

export default CartWidget