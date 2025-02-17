import axios from 'axios';
import  'react'
import { useState } from 'react';

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("");
    const [users, setusers] = useState([]);

    const getUser = async()=>{
        const res  = await axios.get("https://node5.onrender.com/user/user");
        console.log(res);
        console.log(res.data);        
        console.log(res.data.message);
        setmessage(res.data.message);
        console.log(res.data.data);
        setusers(res.data.data); 
    }
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Api Demo1</h1>
        <button onClick={getUser}>Get User</button><br></br>
        {/* {message}
        {
            users?.map((user)=>{
                return <li>{user.name} {user.age}</li>
            })
        } */}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>isActive</th>
                </tr>
            </thead>
            <tbody>
               {
                users?.map((user)=>{
                   return <tr>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive ? "true":"false"}</td>
                    </tr>
                })
               }
            </tbody>
        </table>
    </div>
  )
}
