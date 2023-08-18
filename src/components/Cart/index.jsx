import styles from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
const {cart, addItem,removeItem,clear,isIncart,getTotalItemQuantity,sumTotalCart}=useContext(CartContext);
const navigate=useNavigate();

const goToItemDetail=()=>{
  navigate('/');
}
const onHandleCheckOut=()=>{
  navigate('/checkout');
}

  return (
    <>
      <h2>Cart</h2>  
        
      {cart.length===0 && 
         <div>
         <h4>Cart is empty</h4>
         <button onClick={goToItemDetail}>Volver</button>
         </div>
      }
      
      {cart?.length>0 && cart.map((product)=>
      
      <CartItem key={product.item.id} product={product} removeItem={removeItem} clear={clear} sumTotalCart={sumTotalCart} isIncart={isIncart}/>
          
      )}
    <button className={styles.cartClear} onClick={()=>clear()}>Clear Cart</button>
    <button className={styles.cartCheckout} onClick={onHandleCheckOut}>Check Out</button>
    </>
  )
}

export default Cart;