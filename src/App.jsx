/* import './App.css';
 */import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greetings={'Gracias por tu visita'}/>
    <ItemCount inicial={1} stock={10} onAdd={(quantity)=> console.log('Cantidad agregada ', quantity)}/> 
    </div>
  )
  }
    export default App
