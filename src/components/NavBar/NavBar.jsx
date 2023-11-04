import imagenLogo from './recursos/kass.jpg'
import CartWidget from '../CartWidget/CartWidget'
import estilos from '../NavBar/NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
    <nav>
    <img src={imagenLogo} style={{ width: '200px' }}/>
    <Link to='/'><h3 className={`${estilos.color} ${estilos.fontSize}`}>Especias y Condimentos Käss </h3> </Link>
    <section>
        <Link to='/category/especias'> <button>Especias</button></Link>
        <Link to='/category/blends'><button>Blends</button></Link>
        <Link to='/category/sales'><button>Sales</button></Link>
    </section>
<CartWidget/>
        </nav>
    )
}

export default NavBar