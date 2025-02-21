import axios from 'axios';
import  'react'
import { useEffect, useState } from 'react';
import { ComonLoader } from '../ComonLoader';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("");
    const [isLoader, setisLoader] = useState(false);
    const [users, setusers] = useState([]);

    const getUser = async()=>{
        setisLoader(true);
        const res  = await axios.get("https://node5.onrender.com/user/user");
        setmessage(res.data.message);
        setusers(res.data.data); 
        setisLoader(false);


    }

    const deleteUser = async(id)=>{
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id);
        console.log(res);
        if (res.status == 204) {
            //alert("user deleted..");
            toast.error('record deleted !!', {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
            getUser(); //get -->
          }
        
    }
    useEffect(() => {
        getUser();
    }, [])
    

  return (
    
    <div style={{textAlign:"center"}}>
          <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
        {
            isLoader == true && <ComonLoader></ComonLoader>
        }
        <h1>Api Demo1</h1>
        {/* <button onClick={getUser}>Get User</button><br></br> */}
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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                users?.map((user)=>{
                   return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive ? "true":"false"}</td>
                        <td><button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button></td>
                    </tr>
                })
               }
            </tbody>
        </table>
    </div>
  )
}
