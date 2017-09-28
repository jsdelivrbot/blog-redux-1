import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');
  case FETCH_POST:
    const post = action.payload.data;
    return { ...state, [action.payload.data.id]: action.payload.data }; //adding key and value to new state object
  default:
    return state;
  }
}