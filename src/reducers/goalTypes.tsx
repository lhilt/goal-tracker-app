import { CHANGE_GOAL_TYPE } from '../actions';

const goalTypes = (state='', action: any) => {
  switch(action.type) {
    case CHANGE_GOAL_TYPE:
      return action.goalType;
    default:
      return state;
  }
}

export default goalTypes;
