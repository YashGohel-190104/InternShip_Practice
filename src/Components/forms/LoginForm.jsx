import'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const submitHendler = (data)=>{
        console.log("data.......",data);
    }
    const formValidator = {
        email:{
            require:{
                value:true,
                message:"Please enter your email"
            },
            minLength:{
                value:5,
                message:"Email should be atleast 5 characters long"
            }
        },
        password:{
            require:{
                value:true,
                message:"Please enter your password"
            },
            minLength:{
                value:8,
                message:"Password should be atleast 8 characters long"
            },
            maxLength:{
                value:14,
                message:"Password should not exceed 20 characters"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>Log In Form</h2>
        <form onSubmit={handleSubmit(submitHendler)}>
            <div>
                <label htmlFor="">
                    Email:-
                </label>
                <input type="text" {...register("email",formValidator.email)} />
                <span>
                    {
                        errors.email?.message
                    }
                </span>
            </div>
            <div>
                <label>
                    password:-
                </label>
                <input type="password" {...register("password",formValidator.password)} />
                <span style={{color:"red"}}>
                    {
                        errors.password?.message
                    }
                </span>
            </div>

            <input type="submit" value="Log In" />
        </form>
    </div>
  )
}
