
import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import styles from "./ItemDetail.module.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({product}) => {
  const {addItem}=useContext(CartContext);
  
  const onAdd=(count)=>{
    addItem(product,count)
    
  }


  return (

    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={product.pictureURL} alt={product.title} ></img>
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{product.title}</p>
        <p className={styles.itemDescription}>{product.description}</p>
        <p className={styles.itemStock}>stock: {product.stock}</p>
        <p className={styles.itemPrice}>USD:{product.price}</p>
      </div>
      
      <ItemCount    
         stock={product.stock}
         initial={0}
         onAdd={onAdd}
         /> 
         
     <Link to="/cart">  
      <button type="button" className={styles.finishBuying}>Finish Buying</button>
    </Link>    
    </div>
  )
}

export default ItemDetail;