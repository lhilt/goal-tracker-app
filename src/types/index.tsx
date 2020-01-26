export interface TGoal {
  id: string;
  text: string;
  completed: boolean;
  goalType: string;
}

export interface TGoals {
  [key: string]: TGoal;
}

export interface ReduxState {
  goals: TGoals;
}
