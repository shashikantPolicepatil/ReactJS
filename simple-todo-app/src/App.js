import './App.css';
import TodoApp from '../src/todo/TodoApp';
import {connect} from 'react-redux';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        
         <TodoApp/>
        
      </div>
    );
  }
  
}




export default App;
