import 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {register,handleSubmit} = useForm();

    const submitHendler = (data) => {
        console.log("data", data);        
    }
  return (
    <div onSubmit={handleSubmit(submitHendler)}>
        <h2>Form Demo 4</h2>
        <form >
            <div>
                <label>Food Name::</label>
                <input type="text" {...register("Fname")} />
            </div><br></br>
            <div>
                <label htmlFor="">Food Type::</label>
                Veg: <input type="radio" name="ftype" value="Veg" id="" {...register("FoodType")}/>
                Non-Veg: <input type="radio" name="ftype" value="Non-Veg" id="" {...register("FoodType")}/>
            </div>
            <div>
                <label>Quantity::</label>
                250 GM:- <input type="checkbox" name='Quantity' value="250 GM" {...register("Quantity")} />
                500 GM:- <input type="checkbox" name='Quantity' value="500 GM" {...register("Quantity")} />
                750 GM:- <input type="checkbox" name='Quantity' value="750 GM" {...register("Quantity")} />
                1 KL:- <input type="checkbox" name='Quantity' value="1 KL" {...register("Quantity")} />
            </div>
            <div>
                <label htmlFor="">Time::</label>
                Break-Fast: <input type="radio" name='Time' value="break-fast" {...register("Time")} />
                Lunch: <input type="radio" name='Time' value="break-fast" {...register("Time")} />
                Dinner: <input type="radio" name='Time' value="break-fast" {...register("Time")} />
            </div>
            <div>
                <input type="submit" value="submit" />
            </div>
        </form>
    </div>
  )
}
