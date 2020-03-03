import React from 'react';
import Row from './row';

function Table(props){
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th><button type="button" value = "id" onClick = {props.orderBy} className="btn btn-link">ID</button></th>
                    <th>
                        Name
                        <br/>
                        <button type="button" value = "first" onClick = {props.orderBy} className="btn btn-link">First</button>
                        <button type="button" value = "last" onClick = {props.orderBy} className="btn btn-link">Last</button>
                    </th>
                    <th>Gender</th>
                    <th><button type="button" value = "phone" onClick = {props.orderBy} className="btn btn-link">Phone Number</button></th>
                    <th><button type="button" value = "user" onClick = {props.orderBy} className="btn btn-link">User Name</button></th>
                    <th><button type="button" value = "email" onClick = {props.orderBy} className="btn btn-link">Email</button></th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (

                <Row 
                    image={employee.image}
                    id={employee.id}
                    name={`${employee.first} ${employee.last}`}
                    gender={employee.gender}
                    phone={employee.phone}
                    username={employee.user}
                    email={employee.email}
                    key={employee.id}
                />
                ))}
            </tbody>
        </table>
    )
}

export default Table;