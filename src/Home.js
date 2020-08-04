import React, {Component} from 'react';
import './App.css';

 class Thoughts extends Component{
    render() {
        return (
            <div className= "form">
                <input type= "text" placeholder=" Name" style={{outline:"none", position:"relative", left:"31.7%", top:"250px", height:"30px", textAlign:"center", width:"280px", boxShadow:"(0,0,1)"}}></input>
                <input type= "email" placeholder=" E-mail" style={{outline:"none", position:"relative",  left: "9.2%", top:"310px", height:"30px", textAlign:"center", width:"280px"}}></input>
                <input type= "password" placeholder="Password" style={{ outline:"none", position:"relative",  left: "-13.2%", top:"370px", height:"30px", textAlign:"center", width:"280px"}}></input>
                <button style={{outline:"none", backgroundColor:"teal", color:"white", position:"relative", width:"300px", height:"30px", top:"430px", right:"36%"}}> Go! </button>
            </div>
        )
    }
};
export default Thoughts; 
