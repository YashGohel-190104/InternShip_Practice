import 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    const submitHandler = (data) => {
        console.log(data);        
    }
    const validateSchema = {
        nameValidator:{
            required:{
                value: true,
                message: "Name is required"
            }
        },
        contactValidator:{
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message: "Please enter valid contact number"
            }
        },
        codeValidator:{
            validate:(value)=>{
                return value == "royal" || "code must be required"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>FormDemo6</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">NAME:-</label>
                <input type="text" {...register("name",validateSchema.nameValidator)} />
                <span style={{color:"red"}}>
                    {
                        errors.name?.message
                    }
                </span>
            </div>
            <div>
                <label htmlFor="">Contect</label>
                <input type="text" {...register("contect",validateSchema.contactValidator)} />
                <span>
                    {
                        errors.contect?.message
                    }
                </span>
            </div>
            <div>
                <label htmlFor="">Refral:-</label>
                <input type="text" {...register("code",validateSchema.codeValidator)} />
                <span>
                    {
                        errors.code?.message
                    }
                </span>
            </div>
            <div>
                <input type="submit" value="submit" />
            </div>
        </form>
    </div>
  )
}
