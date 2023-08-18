import db from "./Firebase-Config";
import { collection,addDoc } from "firebase/firestore";
import products from "../src/products";

const itemsCollectionRef=collection(db,"items")
const promises=products.map((product)=>addDoc(itemsCollectionRef,product));

Promise.all(promises).then(()=>{

    console.log(Done);
    Process.exit(0);
});
