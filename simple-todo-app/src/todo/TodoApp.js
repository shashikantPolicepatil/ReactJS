import React, { Component } from 'react';
import store from '../store';
import {connect} from 'react-redux';

class TodoApp extends Component {

    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.addTopic = this.addTopic.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        store.dispatch({
            type:'TOPIC',
            data:event.target.value
        });
    }

     addTopic() {
         debugger;
         console.log("called");
         let topic = this.refs.topicref.value;
         store.dispatch({
             type:'ADD',
             data:topic
         })
    }
    render() {
        return (
            <div>
                <h1>To do App..</h1>
                <p><input type="text" name="topic" ref="topicref" onChange={this.handleChange}
                value={this.props.topic}/>
                <button onClick={this.addTopic}>Add</button>
                </p>
                <div><ui>
                {this.props.topics? this.props.topics.map((val,i)=>{
                    return <li key={i}>{val}</li>
                }):""}
                </ui>
                </div>
            </div>
        );
    }
}

/**const mapTopropsState=(state)=>{
    return {topic:state.todoReducer.topic,
    topics:state.todoReducer.topics
    }
}**/

  const mapTopropsState = (state) => ({
    ...state,
    topic:state.todoReducer.topic,
    topics:state.todoReducer.topics
  });
TodoApp=connect(mapTopropsState)(TodoApp);
export default TodoApp;