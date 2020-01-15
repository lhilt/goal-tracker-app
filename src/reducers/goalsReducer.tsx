const defaultState = [
  {
    id: 0,
    goal: 'Practice redux',
    completed: false,
  },
];

function goals(state=defaultState, action: any) {
  switch(action.type) {
    case 'ADD_GOAL':
      return [...state, action.goal];
    default:
      return state;
  }
}

export default goals;
