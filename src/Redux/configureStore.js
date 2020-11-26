import {createStore} from 'redux';
import {Reducer, initaialState} from './Reducer';

export const ConfigureStore = () =>{
    const store =createStore(
        Reducer,
        initaialState
    );
    return store;
}