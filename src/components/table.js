import React from 'react';
import Row from './row';

function Table(props){
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (

                <Row 
                    image={employee.picture.thumbnail}
                    id={employee.id.value}
                    name={`${employee.name.first} ${employee.name.last}`}
                    gender={employee.gender}
                    phone={employee.phone}
                    username={employee.login.username}
                    email={employee.email}
                    key={employee.id.value}
                />
                ))}
            </tbody>
        </table>
    )
}

export default Table;