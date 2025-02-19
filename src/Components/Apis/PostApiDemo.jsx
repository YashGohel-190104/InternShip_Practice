import axios from 'axios'
import 'react'

export const PostApiDemo = () => {

    const postData = async()=>{
        let users = {
            name:"Yash",
            email:"yash@gmail.com",
            age:"22",
            isActive:"true",
        }

        const res = await axios.post("https://node5.onrender.com/user/user",users);
        console.log(res);
        console.log(res.status);
        console.log(res.data);

        if(res.status == 201){
            alert("User successfully add..");
        }          
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>
            Post Api Demo1
        </h1>
        <button type="submit" onClick={()=>{postData()}}>Add</button>
    </div>
  )
}
