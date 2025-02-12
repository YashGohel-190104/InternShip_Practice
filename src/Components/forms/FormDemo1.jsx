import 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register, handleSubmit} = useForm();

    const submitHendler = (data) =>{
        console.log('data', data);
    }

  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHendler)}>
            <div>
                <label>Name::</label>
                <input type="text" placeholder='Enter Your name' {...register("Name")}/>
            </div>
            <div>
                <label htmlFor="">AGE::</label>
                <input type="number" {...register("Age")} />
            </div>
            <div>
                <label htmlFor="">COUNTRY</label>
                <select {...register("country")}>
                    <option value="INDIA">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="CANADA">CANADA</option>
                </select>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
