interface Goal {
  id: string;
  type: string;
  goal: {
    completed: boolean;
    text: string;
    goalType: string;
  }
}

const defaultState = {
  goalType: '',
  goals: [],
};

function goals(state=defaultState, action: {type: string, goal: Goal}) {
  switch(action.type) {
    case 'ADD_GOAL':
      return {...state, goals: [...state.goals, action.goal]};
    default:
      return state;
  }
}

export default goals;
