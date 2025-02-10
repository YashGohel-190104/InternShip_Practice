import  { useState } from 'react'

export const UseStateDemo = () => {

    const [count, setcount] = useState(0);

    // var count = 0;

    function increseCount (){
        // count++;
        setcount(count + 1);
        console.log("Count =  ",count);
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>Use State Demo</h2>
        <h2>{count}</h2>
        <button onClick={()=>{increseCount()}}>Count</button>
    </div>
  )
}
