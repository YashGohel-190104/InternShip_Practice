import 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

  const {register,handleSubmit,formState:{errors}} = useForm();

  const submitHandler = (data) => {
    console.log('form submitted', data);
  }

  const Vailidator = {
    ageValidator:{
      required:{
        value: true,
        message: "Age is required"
      },
      min:{
        value: 18,
        message: "Age should be at least 18"
      },
      max:{
        value: 60,
        message: "Age should be less than 60"
      }
    }
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Vailidator</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:-</label>
          <input type="text" {...register("name",{required:{value: true,message: "Name is required"}})} />
          <span style={{color:"red"}}>
            {/* {
            errors.name.message && errors.name
            } */}
            {
              errors.name?.message
            }
          </span>
        </div>

        <div>
          <label htmlFor="">Age:-</label>
          <input type="text" {...register("age",Vailidator.ageValidator)} />
          <span style={{color:"red"}}>
            {
              errors.age?.message
            }
          </span>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
