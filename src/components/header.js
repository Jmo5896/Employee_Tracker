import React from 'react';
import Search from './search';

function Header(props){
    return (
<div className="jumbotron">
    <h1 className="display-3">Employee Tracker</h1>
    <p className="lead">Enter name you'd like to search by below:</p>
    <hr className="my-2" />
    <Search 
    handleChange={props.handleChange}
    />
</div>
    )
}

export default Header;