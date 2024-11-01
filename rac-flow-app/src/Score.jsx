import { useState } from "react";

function Score()
{
    const[score,setscore]=useState(0);
    const handleclick1=()=>
        {
            setscore(score+1);
        }
        const handleclick2=()=>
         {
            setscore(score+2);
         }
        const handleclick3=()=>
         {
           setscore(score+3);
         }
        const handleclick4=()=>
         {
            setscore(score+4);
         }
        const handleclick6=()=>
        {
            setscore(score+6);
        }
       
        return(

           <>
           <h1> The cricket score : {score}</h1>
           
           <button onClick={handleclick1}>+1</button>
           <button onClick={handleclick2}>+2</button>
           <button onClick={handleclick3}>+3</button>
           <button onClick={handleclick4}>+4</button>
           <button onClick={handleclick6}>+6</button>
        </>
        )
    }
    export default Score;