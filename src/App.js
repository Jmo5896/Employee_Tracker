import React, { Component } from 'react';
import API from './utils/api';
import Table from './components/table';
import Header from './components/header';
import './App.css';

class App extends Component {
  state = {
    amount: 10,
    employees: []
  }

  componentDidMount = () => {
    API.getEmployees(this.state.amount).then(employees => {
      this.setState({ employees: employees.data.results });
      console.log(this.state.employees);
    })
  }


  render = () => {
    return (
      <div className="App ">
        <Header />
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
