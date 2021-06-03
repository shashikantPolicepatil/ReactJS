import {todoInit} from '../../src/util/InitValue';

const todoReducer=(state=todoInit,action)=>{
    if(action.type==='TOPIC'){
        state={
            ...state,
            topic:action.data
        }
    } 
    if(action.type==='ADD') {
        state={
            ...state,
            topic:''
        }
        state.topics.push(action.data)
    }
    return state;
}

export default todoReducer;