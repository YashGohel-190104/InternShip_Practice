import  'react'
import { useEffect, useState } from 'react';

export const UseEffect = () => {

    const [count, setcount] = useState(0);

    useEffect(()=>{
        console.log("Count Successfully");
        
    },[count])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Use Effect Demo</h1>
        {count}<br></br>
        <button type='button' onClick={()=>{setcount(count+1)}}> + </button>
    </div>
  )
}
