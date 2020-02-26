import React from 'react';
import Search from './search';

function Header(){
    return (
<div className="jumbotron">
    <h1 className="display-3">Employee Tracker</h1>
    <p className="lead">Enter name you'd like to search by below:</p>
    <hr className="my-2" />
        <Search />
</div>
    )
}

export default Header;