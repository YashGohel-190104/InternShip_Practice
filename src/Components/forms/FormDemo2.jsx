import 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register,handleSubmit} = useForm();

    const submitHendler = (data) => {
        console.log(data);
    };

  return (
    <div style={{textAlign:"center"}}>
        <h2>Form Demo 2</h2>
        <form onSubmit={handleSubmit(submitHendler)}>
            <div>
                <label htmlFor="">NAME:-</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label htmlFor="">AGE:-</label>
                <input type="number" {...register('age')} />
            </div>
            <div>
                <label htmlFor="">GENDER:-</label>
                MALE:<input type="radio" value="male" {...register("gender")} name='gender' />
                FE-MALE:<input type="radio" value="female" {...register("gender")} name='gender' />
            </div>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}
