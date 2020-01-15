import uuid from 'uuid';

export function addGoal(goal: any) {
  return {
    id: uuid(),
    type: 'ADD_GOAL',
    item: {
      goal: goal,
      completed: false,
    }
  }
}
