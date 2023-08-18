import React, { useContext } from 'react'
import styles from "./cartWidget.module.css";
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {
  const {cart}=useContext(CartContext);

  return (
    <div className={styles.cartContainer} >
      <img className={styles.cartImage} src='https://as2.ftcdn.net/v2/jpg/00/97/00/05/1000_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg'></img>
      <span className={styles.cartCounter}>{cart.length}</span>
    </div>
  )
}

export default CartWidget;