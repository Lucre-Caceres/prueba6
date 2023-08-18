import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import styles from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom";
import db from "../../../db/Firebase-Config";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([])
  
  const{id}=useParams()  

  const getProducts =async()=> {
    const itemsRef=id ? query(collection(db, "items"), where("category", "==", id)) : collection(db, "items")
        const itemsCollection = await getDocs(itemsRef);
        const data=itemsCollection.docs.map((doc)=>(
          {...doc.data(),id:doc.id}))
          
        setItems(data);
      };
      
  useEffect(() => {
        getProducts()
       }, [id]);
       
 console.log(items)
  

  return (
    <>
    <h1 className={styles.greeting}>{greeting}</h1>
    
    <ItemList items={items}/>
  
    </>
  )
}


export default ItemListContainer;
