import React, { Component } from 'react';
import API from './utils/api';
import Table from './components/table';
import Header from './components/header';
import './App.css';

class App extends Component {
  state = {
    amount: 200,
    employees: [],
    filteredEmp:[],
  }
  
  filterStuff = (arr,val) => {
    const filtered = arr.filter(emp => (emp.name.first.includes(val)) || (emp.name.last.includes(val)));
    // console.log(filtered)
    return filtered
  }

  handleChange = event => {
    let val = event.target.value;
    console.log(val)
    // this.setState({search: val})
    // if (val === ''){
    //   this.setState({ filteredEmp: this.state.employees });
    // } else {
    //   this.setState({ filteredEmp: this.filterStuff(this.state.employees)}, this.render);
    // }
    this.setState({ filteredEmp: this.filterStuff(this.state.employees, val)});
  }

  componentDidMount = () => {
    API.getEmployees(this.state.amount).then(employees => {
      this.setState({ 
        employees: employees.data.results,
        filteredEmp: employees.data.results
      });
      // console.log(this.state.employees);
    })
  }


  render = () => {
    console.log(this.state.filteredEmp)
    // console.log(this.state.employees)
    return (
      <div className="App ">
        <Header 
          handleChange={this.handleChange}
        />
        <Table employees={this.state.filteredEmp} />
      </div>
    );
  }
}

export default App;
