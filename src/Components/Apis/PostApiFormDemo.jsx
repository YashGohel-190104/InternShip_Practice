import axios from 'axios';
import  'react'
import { useForm } from 'react-hook-form'

export const PostApiFormDemo = () => {

    const {register,handleSubmit} = useForm();
    const submithandler  = async (data)=>{
        console.log(data);
        
        const res = await axios.post("https://node5.onrender.com/user/user",data);

        if(res.status == 201){
            alert("User Created Successfully");
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Post Api with Form</h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="">AGE:</label>
                <input type="text" {...register("age")} />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Status:</label>
                <input type="text" {...register("isActive")} />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
