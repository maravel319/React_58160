import './Item.css'
import {Link} from "react-router-dom";

const Item = ({id, name, img, price, stock}) => {

return (
    <div style={{ backgroundColor:'#004173', marginTop: '20px', padding:'15px'}}>
    
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
            {name}
            </h2>
        </header>

        <picture style={{width: '100px', height: 'auto'}}>
            <img src={img} alt={name} />  
        </picture>    
    <section>  
        <p className="Info">
            Precio: ${price}
        </p>
        <p className="Info">
            Stock disponible: {stock}
        </p>
        <p className="Info">
            Cod.: {id}
        </p>
        </section>
        <footer className ="ItemFooter">
        <Link to={`/item/${id}`}>Ver detalle</Link>
        </footer>
    </article>
    </div>
)
}

export default Item