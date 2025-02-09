import React from 'react'

export const Task_1 = () => {
    var cities = [
        {
            id:1,
            name: "Delhi",
            population: 250000,
            AQI:420
        },
        {
            id:2,
            name: "Mumbai",
            population: 2250000,
            AQI:250
        },
        {
            id:3,
            name: "Bangalore",
            population: 150000,
            AQI:500
        },
        {
            id:4,
            name: "Chennai",
            population: 175000,
            AQI:150
        },
        {
            id:5,
            name: "Hyderabad",
            population: 1200000,
            AQI:220
        },
        {
            id:6,
            name: "Kolkata",
            population: 1800000,
            AQI:190
        },
        {
            id:7,
            name: "Pune",
            population: 1400000,
            AQI:265
        },
        {
            id:8,
            name: "Ahmedabad",
            population: 180000,
            AQI:198
        },
        {
            id:9,
            name: "Surat",
            population: 350000,
            AQI:200
        },
        {
            id:10,
            name: "Vadodara",
            population: 320000,
            AQI:130
        }
    ]

  return (
    <div>
        <h2>Array Demo 4</h2>
        <table className='table table-dark'>

            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Population</th>
                <th>AQI</th>
            </thead>
            <tbody>
                {cities.map((city) => (
                    <tr>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td style={{background:city.population>350000 ? "red":"green"}}>{city.population}</td>
                        <td><span style={{color:city.AQI>=200?"red":"yellow"}}>{city.AQI}</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
