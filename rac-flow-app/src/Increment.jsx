import { useState } from "react";

function Increment()
{
    const [count,setcount]=useState(0);
    const handleclickInc =()=>{
       
            setcount(count+1);
        } 
        const handleclickDec=()=>{
       
            setcount(count-1);
        } 

        return(
        
         <>
          <h1>This is Increment value :{count}</h1>
          <button style={{color:'red'}} onClick={handleclickInc}>Increment</button>
          <button style={{color:'green'}} onClick={handleclickDec}>Decrement</button>
         
         </>

        )
}
export default Increment;
