import React,{Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';

class Content extends Component{
    render(){
    return(
        <>
        <Router>
            <Route  path="/" exact component={Home}/>
            <Route path="/works" exact component={Works}/>
            <Route path="/about" exact component={About}/>
        </Router>
        </>
    )
    }
}

export default Content;