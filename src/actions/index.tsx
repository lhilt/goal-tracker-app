import uuid from 'uuid';

export const ADD_GOAL = 'ADD_GOAL';

export const addGoal = (text: string, goalType: string) => ({
  type: ADD_GOAL,
  id: uuid(),
  goal: {
    completed: false,
    text,
    goalType,
  }
});
