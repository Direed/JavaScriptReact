import React, {Component} from 'react';
import './App.css';
import TableFull from './Table';
class AppAplication extends Component{

  state ={
    data:[]
  }
  

  async componentDidMount()
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    this.setState({
      data
    })
  }

  render(){
    return(
      <div claasName="container">
        <TableFull data={this.state.data} />
      </div>
    );
  }
}
export default AppAplication;
