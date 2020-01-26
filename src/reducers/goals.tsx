import { TGoals } from '../types';
import { ADD_GOAL, TOGGLE_COMPLETED, TGoalAction } from '../actions';

const defaultState = {
  '0': {
    id: '0',
    text: 'test',
    completed: true,
    goalType: 'monthly',
  }
};

const goals = (state: TGoals = defaultState, action: TGoalAction) => {
  switch(action.type) {
    case ADD_GOAL:
      return { ...state, [action.id]: action.goal };
    case TOGGLE_COMPLETED:
      const goal = state[action.id];
      const prevState = goal.completed;
      return { ...state, [action.id]: { ...goal, completed: !prevState} };
    default:
      return state;
  }
}

export default goals;
