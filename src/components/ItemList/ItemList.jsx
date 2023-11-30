import Item from '../Item/Item'

const ItemList =({products})=>{
    return(
        <div style={{ padding: '10px'}}>
        {
    products.map(prod=> {
        return (
            <Item key={prod.id} {...prod}/>
            )
})
}  
        </div>
    )
}

export default ItemList



