import React from "react";
import {useNavigate} from "react-router-dom";
import Me from "./Me";
import './App.css';

export default function Homepage(){
    
    const Navigate = useNavigate();

    const nextpage = () =>{
        Navigate('/me')
    }
    return (
       <div>            
        <h1>Welcome To Portfolio Website &nbsp;Suphakorn Rodchona</h1>
        <button className='button' onClick={nextpage}>Start</button>
        </div>

    );

}