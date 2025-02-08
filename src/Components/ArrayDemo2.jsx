import React from 'react'

export const ArrayDemo2 = () => {

    var students = [
        {
            name:"Yash",
            age:"22",
            marks:"90"
        },
        {
            name:"keval",
            age:"24",
            marks:"85"
        },
        {
            name:"shyam",
            age:"20",
            marks:"70"
        },
        {
            name:"khushi",
            age:"23",
            marks:"95"
        },
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h2>Array Demo 2</h2>
        {
            students.map((stu)=>{
                return <div>
                    <h3>Name: {stu.name}</h3>
                    <p>Age: {stu.age}</p>
                    <p>Marks: {stu.marks}</p>
                    <hr/>
                </div>
            })
        }
    </div>
  )
}
