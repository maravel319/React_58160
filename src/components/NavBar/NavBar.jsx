import imagenLogo from './recursos/kass.jpg'
import CartWidget from '../CartWidget/CartWidget'
import estilos from '../NavBar/NavBar.module.css'

const NavBar=()=>{
    return(
    <nav>
    <img src={imagenLogo} style={{ width: '200px' }}/>
    <h3 className={`${estilos.color} ${estilos.fontSize}`}>Especias y Condimentos Käss </h3>

<button>Especias</button>
<button>Blends</button>
<button>Sales</button>

<CartWidget/>

        </nav>
    )
}

export default NavBar