import ItemCount from "../ItemCount/ItemCount"; 

const ItemDetail = ({id, name, img, description, price, stock}) => {
return (
<article className='CardItem'>
    <p>{name}</p>
    <img src={img} style={{width:100}}/>
    <p>Valor {price}</p>
    <p> Descripción: {description}</p>
    <p>Stock: {stock}</p>
    <p>Cod ID: {id}</p>
    <ItemCount stock={stock} initial={0} onAdd={(quantity) => console.log('Cantidad agregadaa:', quantity)}/>
</article>

)
}

export default ItemDetail


