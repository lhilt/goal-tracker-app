import { VisState } from '../types';
import { TOGGLE_VISIBILITY, TVisAction } from '../actions';

const defaultState = {
  showCompleted: true,
};

const visibility = (state: VisState = defaultState, action: TVisAction) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      const prevVis = state.showCompleted;
      return { ...state, showCompleted: !prevVis };
    default:
      return state;
  }
}

export default visibility;
