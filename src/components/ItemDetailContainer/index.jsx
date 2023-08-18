import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import styles from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../../../db/Firebase-Config";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const {id}=useParams();

  const getItem =async()=> {
    const docRef= doc(db, 'items', id)
    const data= await   getDoc(docRef)
    setProduct({id:data.id, ...data.data()});
    
  }
  useEffect(() => {
  
    getItem(); 

   
}, [id]);
  
    return (
    <div> 
    <ItemDetail 
    product={product} 
    id={id} />

    </div>
  )
}

export default ItemDetailContainer;