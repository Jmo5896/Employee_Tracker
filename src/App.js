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
    desc: 1
  }
  
  componentDidMount = () => {
    API.getEmployees(this.state.amount).then(employees => {
      console.log(employees)
      const results = employees.data.results.map(emp => {
        return {
          image: emp.picture.thumbnail,
          id: emp.id.value,
          first: emp.name.first,
          last: emp.name.last,
          gender: emp.gender,
          phone: emp.phone,
          user: emp.login.username,
          email: emp.email

        };
      });
      this.setState({ 
        employees: results,
        filteredEmp: results
      });
    })
  }

  filterStuff = (arr,val) => {
    console.log(arr)
    const filtered = arr.filter(emp => (emp.first.includes(val)) || (emp.last.includes(val)));
    return filtered
  }

  handleChange = event => {
    const val = event.target.value;
    this.setState({ filteredEmp: this.filterStuff(this.state.employees, val)});
  }

  orderBy = event => {
    const val = event.target.value;
    const compare=( a, b ) => {
      if ( a[val] < b[val] ){
        return -this.state.desc;
      }
      if ( a[val] > b[val]){
        return this.state.desc;
      }
      return 0;
    }

      this.setState({
        filteredEmp:this.state.filteredEmp.sort(compare),
        desc: -this.state.desc     
      });

    console.log(this.state.filteredEmp);


  }

  render = () => {
    return (
      <div className="App ">
        <Header 
          handleChange={this.handleChange}
        />
        <Table 
          employees={this.state.filteredEmp} 
          orderBy = {this.orderBy}
        />
      </div>
    );
  }
}

export default App;
