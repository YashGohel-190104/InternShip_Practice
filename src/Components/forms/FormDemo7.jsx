import  'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const FormDemo7 = () => {

    const {register,handleSubmit} = useForm();
    const [output, setoutput] = useState();
    const [isSubmited, setisSubmited] = useState(false);

    const submithandler = (data) =>{
        console.log(data);
        setoutput(data);
        setisSubmited(true);
        
    }

  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label htmlFor="">Name:-</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="">DATE:-</label>
                <input type="date" {...register("date")} />
            </div>
            <div>
                <label htmlFor="">Message:-</label>
                <input type="text" {...register("message")} />
            </div>
            <div>
                <label htmlFor="">COLOR:-</label>
                <input type="color" {...register("color")}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        {
            isSubmited == true ?
        <div style={{color:output.color}}>
            <h1>NAME:-{output?.name}</h1>
            <h2>Greet:-{output?.message}</h2>
            <h2>Date:- {output?.date}</h2>
        </div> 
        : ""
        }
    </div>
  )
}
