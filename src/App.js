import React, {Component} from 'react';
import './App.css';
import TableFull from './Table';

class AppAplication extends Component{
  render(){
    const characters =[
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    
    return(
      <div claasName="container">
        <TableFull characterData={characters} />
      </div>
    );
  }
}
export default AppAplication;
