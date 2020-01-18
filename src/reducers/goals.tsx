import { ADD_GOAL } from '../actions';

const goals = (state=[], action: any) => {
  switch(action.type) {
    case ADD_GOAL:
      return [ ...state, action.goal ];
    default:
      return state;
  }
}

export default goals;
