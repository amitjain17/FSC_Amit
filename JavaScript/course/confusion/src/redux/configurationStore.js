import { createStore } from 'redux';
import { Reducer, initialState } from './reducers.js';

export const ConfigureStore = () => {
    const store = createStore(Reducer, initialState);
    return store;
}