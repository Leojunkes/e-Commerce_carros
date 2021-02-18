import { combineReducers, createStore } from 'redux';

import carsReducer from './cars';

const rootReducer = combineReducers({
    cars:carsReducer
})

export default createStore(rootReducer);
