import  'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit} = useForm();

    const submitHandler = (data) =>{
        console.log(data);
        
    }
  return (
    <div>
        <h2>Form Demo 3</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">NAME:-</label>
                <input type='text' {...register('name')} required/>
            </div>
            <div>
                <label htmlFor="">EMAIL:-</label>
                <input type='email' {...register('email')} required/>
            </div>
            <div>
                <label htmlFor="">GENDER</label>
                MALE: <input type="radio" name="gender" value="male" {...register("gender")}/>
                FE-MALE: <input type="radio" name="gender" value="female" {...register("gender")}/>
            </div>
            <div>
                <label htmlFor="">Reports</label>
                CRC:- <input type="checkbox" name="reports" value= "crc" {...register("reports")} />
                CBC:- <input type="checkbox" name="reports" value= "cbc" {...register("reports")} />
                Biopacy:- <input type="checkbox" name="reports" value= "biopacy" {...register("reports")} />
            </div>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
