import React from 'react';
import { connect } from 'react-redux';
import { Dispatch as ReduxDispatch } from 'redux';
import { TGoal, ReduxState } from '../../../../types';
import { TGoalAction, toggleCompleted } from '../../../../actions';
import './Goal.scss';

interface OwnProps {
  goalId: string;
}

interface StoreProps {
  goal: TGoal;
}

type Dispatch = ReduxDispatch<TGoalAction>;
interface DispatchProps {
  onClick: () => void;
}

type Props = StoreProps & DispatchProps;

const Goal: React.FC<Props> = ({ goal, onClick }) => {
  const checkmark = goal.completed ? 'X' : '';
  const checkedClass = goal.completed ? 'completed' : '';

  return (
    <div className="goal">
      <div className="checkbox" onClick={onClick}>
        {checkmark}
      </div>
      <div className={`goal-text ${checkedClass}`}>{goal.text}</div>
    </div>
  );
}

const mapStateToProps = (state: ReduxState, ownProps: OwnProps) => {
  return ({
    goal: state.goals[ownProps.goalId]
  });
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
  const { goalId } = ownProps;
  return ({
    onClick: () => dispatch(toggleCompleted(goalId))
  });
}

export default
  connect<StoreProps, DispatchProps, OwnProps, ReduxState>(
    mapStateToProps,
    mapDispatchToProps
  )(Goal);
