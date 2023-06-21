import { AddTOCART } from "./constants";
 
  const addToCart=(x)=>{
    console.log("action is calling now value is :"+x);
    return {

        type:AddTOCART,
        data:x
    }
}
 export default addToCart