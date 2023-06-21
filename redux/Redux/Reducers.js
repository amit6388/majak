import { AddTOCART } from "./constants";
export const cartData=(data=[],action)=>{
   
    if(action.type===AddTOCART){
        console.log("Reducer is calling now"+action.data.name);
        return  action.data
    }else{
        return "no action Match bro..."
    }
}