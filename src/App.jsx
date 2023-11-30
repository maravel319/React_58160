import './App.css';
import { useState, createContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationContext';

export const CartContext = createContext()

const App= () => {
  return (
  <div className="App">
    <NotificationProvider>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos por cada categoría'}/>}/>
    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </NotificationProvider>
    </div>
  )
  }
    export default App


