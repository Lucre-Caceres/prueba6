import React from 'react'
import styles from "./Checkout.module.css";
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from '../../../db/Firebase-Config';


const Checkout = () => {
const {cart, sumTotalCart}=useContext(CartContext);


    const createOrder=async(order)=>{

        const orderCollection=collection(db,"orders");
        const orderCreated=await addDoc(orderCollection,order);
        return {id:orderCreated.id}
  }

  const onHandleOrder=async(evento)=>{
    evento.preventDefault();
    const user = {
      name: evento.target.name.value,
      email: evento.target.email.value,
      phone: evento.target.phone.value
    }
    const newOrder= {
      buyer:user,

      items: cart,
      date: serverTimestamp(),
      total: sumTotalCart,
    }
const order=await createOrder(newOrder)
alert("Felicitaciones " + user.name + ", su orden fue guardad bajo el id nro " + order.id + ". ¡Muchas gracias!");
    clear();
    evento.target.reset()
  
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1>Checkout</h1>
      <form className={styles.checkoutForm} onSubmit={onHandleOrder}>
        <input className={styles.inputName}
        placeholder='Name'
        id='name'
        name='name'
        required={true}
        label='Name'
        
        
        />
        <input className={styles.inputPhone}
        placeholder='Phone Number'
        id='phone'
        name='phone'
        required={true}
        label='Phone'

        
        />
        <input className={styles.inputemail}
        placeholder='Email address'
        id='email'
        name='email'
        required={true}
        label='Email'
        
        /> 
        <button type="submit">Submit</button>   
      </form>

      
    </div>
  )
}

export default Checkout;