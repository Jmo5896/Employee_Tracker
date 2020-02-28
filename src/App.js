import React, { Component } from 'react';
import API from './utils/api';
import Table from './components/table';
import Header from './components/header';
import './App.css';

class App extends Component {
  state = {
    amount: 10,
    employees: [],
    filteredEmp:[],
    search: ''
  }
  
  filterStuff = arr => {
    const filtered = arr.filter(emp => (emp.name.first.includes(this.state.search)));
    console.log(filtered)
    return filtered
  }

  handleChange = event => {
    let val = event.target.value;
    this.setState({search: val})
    if (val === ''){
      this.setState({ filteredEmp: this.state.employees });
    } else {
      this.setState({ filteredEmp: this.filterStuff(this.state.employees)});
    }
  }

  componentDidMount = () => {
    API.getEmployees(this.state.amount).then(employees => {
      this.setState({ 
        employees: employees.data.results,
        filteredEmp: employees.data.results
      });
      console.log(this.state.employees);
    })
  }


  render = () => {
    return (
      <div className="App ">
        <Header 
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <Table employees={this.state.filteredEmp} />
      </div>
    );
  }
}

export default App;
