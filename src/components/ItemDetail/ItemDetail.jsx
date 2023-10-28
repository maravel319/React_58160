import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount"; 


const ItemDetail = ({id, name, img, description, price, stock}) => {
return (
<article className='CardItem'>
    <p>{name}</p>
    <img src={img} style={{width:100}}/>
    <p>{price}</p>
    <p> Descripción: {description}</p>
    <p>{id}</p>
    <p>Cod ID: {stock}</p>
    <ItemCount stock={stock} onAdd={(quantity) => console.log('Cantidad agregadaa:', quantity)}/>
</article>

)
}

export default ItemDetail

