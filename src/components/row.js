import React from 'react';


function Row(props) {
    return (

        <tr>
            <td>
                <img src={props.image} alt='emp_img'/>
            </td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.phone}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default Row;
