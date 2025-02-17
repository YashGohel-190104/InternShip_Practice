import  'react'

export const ArrayDemo3 = () => {

    var employees = [
        {
            id: 1,
            name: "John Doe",
            age: 30,
            department: "IT"
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 28,
            department: "HR"
        },
        {
            id: 3,
            name: "Mike Johnson",
            age: 35,
            department: "Finance"
        },
        {
            id: 4,
            name: "Sarah Brown",
            age: 27,
            department: "Marketing"
        },
        {
            id: 5,
            name: "David Wilson",
            age: 32,
            department: "IT"
        }
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h2>Array Demo 3 </h2>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.department}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
