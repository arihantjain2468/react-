import {createStore, combineReducers,applyMiddleware} from 'redux';
// import {Reducer, initaialState} from './Reducer';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () =>{
    const store =createStore(
       // Reducer,initaialState
       combineReducers({
           dishes: Dishes,
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders,
           ...createForms({
               feedback: InitialFeedback
           })
       }),
       applyMiddleware(thunk,logger)
    );
    return store;
}