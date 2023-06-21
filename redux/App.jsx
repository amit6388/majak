
import React from "react"; 
import addToCart from './Redux/Action'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
const App = () => {
    const dispatch=useDispatch()
    const data={
        name:"amit chauahan",
        exp:1,
        salary:50,
        address:"lmp"
    }
    const result=useSelector((state)=>state.cartData)

    return (
       <><h1><center>Redux TEsting</center></h1>


       <button onClick={()=>dispatch(addToCart(data))}>ADD Info</button>
       
       <br />
       {
        console.log(result)
       }
       <br />
       {result.name}   <br />
       {result.salary}   <br />
       {result.address}   <br />
       {result.exp} {result.name}
       </>
    )
}

export default App;


