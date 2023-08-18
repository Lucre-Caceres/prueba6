
import { text } from '@fortawesome/fontawesome-svg-core';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar"
import Input from './components/input';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './contexts/CartContext';
import CartItem from './components/CartItem';
import Checkout from './components/Checkout';


const App = () => {


  


  return (
    <div>
      
      
        <Navbar />      
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a La Tiendita"} />} />
          <Route path='/Home' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
      </Routes>
      
      
      

    </div>
  );
};

export default App;