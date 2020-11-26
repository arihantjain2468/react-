import { DISHES } from '../Shared/dishes';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';
import { COMMENTS } from '../Shared/comments';

export const initaialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

export const Reducer = (state = initaialState,action)=> {
    return state;
};