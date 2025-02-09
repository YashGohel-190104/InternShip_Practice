import React from 'react'

export const ArrayDemo4 = () => {


    var employees = [
        {
            id: 1,
            name: 'John Doe',
            age: 30,
            salary : 25000,
            gender:"male"
        },
        {
            id: 2,
            name: 'Mical jose',
            age: 20,
            salary : 21000,
            gender:"male"
        },
        {
            id: 3,
            name: 'Seeta',
            age: 18,
            salary : 15000,
            gender:"female"
        },
        {
            id: 4,
            name: 'Kavita',
            age: 24,
            salary : 30000,
            gender:"female"
        },
        {
            id: 5,
            name: 'Jateen',
            age: 25,
            salary : 50000,
            gender:"male"
        },
        {
            id: 6,
            name: 'Yash',
            age: 21,
            salary : 35000,
            gender:"male"
        },
        
    ]
  return (
    <div>
        <h2>Array Demo 4</h2>
        <table className='table table-dark'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Gender</th>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr>
                        <td>{employee.id}</td>
                        <td><span style={{color:employee.name.startsWith("J")?"yellow":"red"}}>{employee.name}</span></td>
                        <td><span style={{color:employee.age>=24?"chocolate":"white"}}>{employee.age}</span></td>
                        <td>
                            <span style={{color:employee.salary>25000?"green":"red"}}>{employee.salary}</span>
                        </td>
                        <td style={{background: employee.gender == "male"?"blue" : "pink"}}>{employee.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
