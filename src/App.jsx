
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greetings={'Gracias por tu visita'}/>
    </div>
  )
  }
    export default App
