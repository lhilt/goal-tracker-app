import uuid from 'uuid';

export const ADD_GOAL = 'ADD_GOAL';
export const CHANGE_GOAL_TYPE = 'CHANGE_GOAL_TYPE';

export const addGoal = (text: string, goalType: string) => ({
  type: ADD_GOAL,
  id: uuid(),
  goal: {
    completed: false,
    text,
    goalType,
  }
});

export const changeGoalType = (goalType: string) => ({
  type: CHANGE_GOAL_TYPE,
  goalType,
});
