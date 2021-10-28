import React from 'react'
import { useState } from "react";
function Input(props) {
   const[value,changevalue]=useState("");
   const statechange=(e)=>
   {
      changevalue(e.target.value);
   }
   const submitResult=()=>
   {
     
   props.getData(value);
   }
    return (
        <div>
            <input onChange={statechange}/>
            <button onClick={submitResult}>Add</button>
        </div>
    )
}

export default Input
