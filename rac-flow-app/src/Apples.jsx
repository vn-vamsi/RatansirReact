import { useState } from "react";

function Apples()
{
    const [apples,setApples]=useState(0);

    const handleclick1=()=>
    {
        setApples(apples+1);
    }
    const handleclick2=()=>
        {
            apples>0 && setApples(apples-1);
            
        }
        const handleclick3=()=>
         {
                setApples(0);
        }

    return(
        <>
        
        <h1> Number of Apples :{apples}</h1>
        {apples===0 ?(
            <p>No apples left</p>
        )
        :

        (
            <p>Great! some have apples </p>
        )}
        <button onClick={handleclick1}>Add apple</button>
        
        <button onClick={handleclick2}>Remove apple</button>

        <button onClick={handleclick3}>Reset</button>

        </>

        
        
    )
}
export default Apples;