import uuid from 'uuid';

export function addGoal(text: string, goalType: string) {
  return {
    id: uuid(),
    type: 'ADD_GOAL',
    goal: {
      completed: false,
      text,
      goalType,
    }
  }
}
