import React, {Component} from 'react';
import './App.css';
import TableFull from './Table';
import { bd } from './bd';
class AppAplication extends Component{
  render(){
    const characters = bd
    
    return(
      <div claasName="container">
        <TableFull characterData={characters} />
      </div>
    );
  }
}
export default AppAplication;
