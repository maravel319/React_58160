import imagenLogo from './recursos/kass.jpg'
import CartWidget from '../CartWidget/CartWidget'
import estilos from '../NavBar/NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
        <nav style={{ backgroundColor:'#004173', display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'10px' }}>
                <img src={imagenLogo} style={{ width: '200px' }} />
                <Link to='/'>
                <h3 className={`${estilos.color} ${estilos.fontSize}`}>Especias y Condimentos Käss</h3>
                </Link>
            </div>
    <section style={{ marginLeft: 'auto' }}>
        <Link to='/category/especias'> <button>Especias</button></Link>
        <Link to='/category/blends'><button>Blends</button></Link>
        <Link to='/category/sales'><button>Sales</button></Link>
    </section>
<CartWidget/>
        </nav>
    )
}

export default NavBar