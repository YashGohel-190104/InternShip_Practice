import React from 'react'

export const ArrayDemo1 = () => {

    var users = ["Yash","Keval","Khushi","Paresh"];
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Array Demo 1</h2>
        {
            users.map((user)=>{
                return  <li>{user}</li>
            })
        }
    </div>
  )
}
