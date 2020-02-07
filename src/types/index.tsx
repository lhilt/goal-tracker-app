export interface TGoal {
  id: string;
  text: string;
  completed: boolean;
  goalType: string;
}

export interface TGoals {
  [key: string]: TGoal;
}

export interface VisState {
  showCompleted: boolean;
}

export interface ReduxState {
  visibility: VisState;
  goals: TGoals;
}
