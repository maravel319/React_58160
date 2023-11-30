import carrito from './recursos/01.svg'

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor:'#004173',  }}>
            <img style={{ width: '60px' }} src={carrito}/>
            0
            </div>
    )
}

export default CartWidget