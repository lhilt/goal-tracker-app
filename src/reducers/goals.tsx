import { ADD_GOAL } from '../actions';

const defaultState = {
  id: 0,
  goal: {
    text: 'test',
    completed: false,
    goalType: 'monthly',
  }
};

const goals = (state=defaultState, action: any) => {
  switch(action.type) {
    case ADD_GOAL:
      return { ...state, [action.id]: action.goal };
    default:
      return state;
  }
}

export default goals;
