import {createStore,combineReducers,applyMiddleware} from 'redux';
import todoReducer from '../src/reducers/todoReducer';
import logger from 'redux-logger';

const reducers = combineReducers({todoReducer});
const middlewares = applyMiddleware(logger);

const store=createStore(reducers,middlewares);

export default store;