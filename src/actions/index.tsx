import uuid from 'uuid';
import { TGoal } from '../types';

export const ADD_GOAL = 'ADD_GOAL';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

export interface TGoalAction {
  type: string;
  id: string;
  goal?: TGoal;
}

export interface TVisAction {
  type: string;
}

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

export const toggleCompleted = (goalId: string) => {
  return ({
    type: TOGGLE_COMPLETED,
    id: goalId,
  });
};

export const toggleVisibility = () => {
  return ({
    type: TOGGLE_VISIBILITY,
  });
};
