import './ItemList.css'
import Items from '../Item/Item'

const ItemList =({products})=>{
    return(
        <div className="ListGroup">
            {productos.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList