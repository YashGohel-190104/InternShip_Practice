import  'react'
import { useForm } from 'react-hook-form'
import {  redirect } from 'react-router-dom';

export const TaskForm = () => {

  const {register,handleSubmit} = useForm();

  const submitHendler = (data)=>{
    console.log('form submitted',data);
  }
  return (
    <div>
        <h2>Library Membership Form</h2>
        <form onSubmit={handleSubmit(submitHendler)}>
          <div>
            <label htmlFor="">Name:-</label>
            <input type="text" name='name' {...register("name")}/>
          </div>

          <div>
            <label htmlFor="">Email:-</label>
            <input type="email" name="emil" id="" {...register("email")} />
          </div>

          <div>
            <label htmlFor="">Membership Type:-</label><br></br>
            Student:-<input type="radio" name="Membership" value="student" {...redirect("Membership")} />
            Employee:-<input type="radio" name="Membership" value="Employee" {...redirect("Membership")} />
            Teacher:-<input type="radio" name="Membership" value="Teacher" {...redirect("Membership")} />
          </div>
          <div>
          <label>Interests (Select all that apply):</label><br></br>
           <input type="checkbox" id="fiction" name="interests" value="Fiction" {...register("Intrests")}/>
           <label>Fiction</label><br></br>
           <input type="checkbox" id="nonfiction" name="interests" value="Non-fiction" {...register("Intrests")}/>
           <label >Non-fiction</label><br></br>
            <input type="checkbox" id="history" name="interests" value="History" {...register("Intrests")}/>
           <label>History</label><br></br>
            <input type="checkbox" id="science" name="interests" value="Science" {...register("Intrests")}/>
           <label>Science</label><br></br>
           <input type="checkbox" id="science" name="interests" value="Politics" {...register("Intrests")}/>
           <label>Politics</label><br></br>
          </div>

          <div>
            <label > Prefer Section</label>
            <select name="section" id="" {...register("PS")}>
              <option value="general">General</option>
              <option value="kids">Kids</option>
              <option value="research">research</option>
              <option value="reference">reference</option>
            </select>
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
    </div>
  )
}
