import imagenLogo from './recursos/kass.jpg'
import CartWidget from '../CartWidget/CartWidget'
import estilos from '../NavBar/NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
    <nav>
    <img src={imagenLogo} style={{ width: '200px' }}/>
    <h3 className={`${estilos.color} ${estilos.fontSize}`}>Especias y Condimentos Käss </h3>
    <section>
        <Link to='/category/especias'>Especias</Link>
        <Link to='/category/Blends'>Blends</Link>
        <Link to='/category/sales'>Sales</Link>
    </section>
<CartWidget/>
        </nav>
    )
}

export default NavBar