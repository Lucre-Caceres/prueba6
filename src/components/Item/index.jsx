import { Link } from "react-router-dom";
import styles from "./item.module.css"
import { useContext } from "react";
import { CartContext} from "../../contexts/CartContext";


const Item = ({item}) => {
const {addItem}=useContext(CartContext);

  return (
    <Link to={`/item/${item.id}`}>
    <div className={styles.productContainer}>
        <h3 className={styles.productTitle} >{item.title} </h3>
        <img className= {styles.productImage} src={item.pictureURL} />
        <p className={styles.productCategory} >{item.category} </p>
        <p className={styles.productDescription} >{item.description} </p>
        <p className={styles.productStock} >qty {item.stock} </p>
        <p className={styles.productPrice} >USD:{item.price} </p>
        <button onClick={() => addItem(id)} className='productButton'>View details</button>
    </div>

    </Link>
    
  )
}

export default Item;