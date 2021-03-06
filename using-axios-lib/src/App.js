import React from 'react';
import UserForm from './components/UserForm';
import FunctionClick from './components/FunctionClick';
import axios from 'axios';
import './App.css';
import UserForms from './components/multisteps/UserForms';

//https://api.github.com/users/john

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      repose:null
    }
  }
  getUser = (e)=>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user);
    if(user) {
      axios.get('https://api.github.com/users/'+user)
    .then((res)=>{
      const repose = res.data.public_repos;
      console.log(repose);
      this.setState({repose:repose});
    })
    } else {
      return
    }
  }
 render(){
  return(
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">Http calls in React</h1>
    </header>    
    <UserForms/>
  </div>
  )
  }
}


export default App;
/**
 * <UserForm getUser={this.getUser}/>
    {this.state.repose?this.state.repose:""}
    {this.state.repose?<p>number of repose:{this.state.repose}</p>:
    <p>Please enter username</p>}
    <FunctionClick/>
 */