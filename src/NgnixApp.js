import React, {Component} from 'react';
import './App.css';
import ConverNgnix from './ConverNgnix';
import TableFull from './TableProxy';


class Ngnix extends Component{
    state ={
        location: '',
        proxy_pass: '',
        flagstat: false,
        newproxy: {
            l:'',
            p:'',
        },
        masproxy: []
      }
      constructor(props) {
        super(props);
    
        this.getLocation = this.getLocation.bind(this);
        this.getProxyPass = this.getProxyPass.bind(this);
        this.addBlock = this.addBlock.bind(this);
        this.convert = this.convert.bind(this);
      }
    getLocation(event)
    {
        this.setState({value: event.target.value});
        this.state.location=event.target.value;
    }
    getProxyPass(event)
    {
        this.setState({value: event.target.value});
        this.state.proxy_pass=event.target.value;
    }
    addBlock(event)
    {
        alert('Location:'+this.state.location+';  Proxy_Pass:'+this.state.proxy_pass+';');
        this.state.newproxy.l=this.state.location;
        this.state.newproxy.p=this.state.proxy_pass;
        this.state.masproxy.push(this.state.newproxy);
        alert(this.state.masproxy.length);
        alert(this.state.masproxy);
        event.preventDefault();
    }
    convert(event)
    { 
        var div=document.getElementById("div").style.display;
        var link=document.getElementById("link").innerHTML;
        if(div=="")div="block";
        if(div=="none")
        {
            div="block";
            link="Not Convert block";
        }
        else
        {
            div="none";
            link="Convert block";
        }
        document.getElementById("div").style.display=div;
        document.getElementById("link").innerHTML=link;
        event.preventDefault();
    }



      render(){
        return(
            <div>
                <div>
                    <lable>Location:</lable>
                    <input type='location' value={this.state.location} onChange={this.getLocation}></input>
                    <label>Proxy_Pass:</label>
                    <input type='proxy_pass' value={this.state.proxy_pass} onChange={this.getProxyPass}></input>
                    <button onClick={this.addBlock} >Add block</button>
                    <TableFull data={this.state.masproxy}/>
                </div>

                <div>
                    <button id='link' onClick={this.convert} >Convert block</button>
                    <div class='submenu' id='div'>                
                    {/* <ConverNgnix locat={this.state.location} proxy={this.state.proxy_pass} /> */}
                    <p>All data</p>
                    <TableFull data={this.state.masproxy}/>
                    </div>
                </div>

                <div>
                </div>

            </div>
        );
      }
} export default Ngnix;