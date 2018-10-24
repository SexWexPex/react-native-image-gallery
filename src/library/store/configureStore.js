import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {fetchReducer} from './reducers/fetchReducer';

const rootReducer = combineReducers({
    fetch: fetchReducer
});

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

