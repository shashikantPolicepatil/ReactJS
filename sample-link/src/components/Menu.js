import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = ()=>{
    
    return(
        
            <Router>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/about">About</Link>
            </Router>
        
    )
    
}

export default Menu;