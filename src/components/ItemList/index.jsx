import { useEffect, useState } from "react";
import Item from "../Item";
import styles from "./ItemList.module.css"

const ItemList = ({items}) => {
  
  
    return (
    <div>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
    </div>
  )
}

export default ItemList;