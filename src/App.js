import React, {Component} from 'react';
import './App.css';
import TableFull from './Table';
import Search from './Search';
class AppAplication extends Component{
  state ={
    data:[],
    search: '',
    flag: ''
  }
  async componentDidMount()
  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    this.setState({
      data
    })
  }
  searchHandler = (search) =>{
    this.setState({search})
    console.log(search)
  }
  viborHandler = (flag) =>{
    this.setState({flag})
    console.log(flag)
  }
  getFilteredData()
  {
    const {data, search, flag} = this.state

    if(!search)
    {
      return data
    }
    
    return data.filter(item => {
      if(flag=='userId')
      {
      return String(item['userId'])===search
      }
      if(flag=='id')
      {
      return String(item['id'])===search
      }
      if(flag=='title')
      {
      return item['title'].toLowerCase().includes(search.toLowerCase())
      }
      if(flag=='body')
      {
      return item['body'].toLowerCase().includes(search.toLowerCase())
      }
    })
  }
  render(){
    const filteredData = this.getFilteredData()
    const data=filteredData
    return(
      <div claasName="container">
        <Search onVibor={this.viborHandler} onSearch={this.searchHandler}/>
        <TableFull data={data} />
      </div>
    );
  }
}
export default AppAplication;
