import uuid from 'uuid';

export const ADD_GOAL = 'ADD_GOAL';

export const addGoal = (text: string, goalType: string) => {
  const id = uuid();
  return ({
    type: ADD_GOAL,
    id: id,
    goal: {
      completed: false,
      text,
      goalType,
      id,
    }
  });
};
