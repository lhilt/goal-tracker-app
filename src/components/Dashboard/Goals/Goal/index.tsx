import React from 'react';
import { connect } from 'react-redux';
import { TGoal, ReduxState } from '../../../../types';
import './Goal.scss';

interface OwnProps {
  goalId: string;
}

interface StoreProps {
  goal: TGoal;
}

const Goal: React.FC<StoreProps> = ({ goal }) => {
  return (
    <div className="goal">
      <div className="checkbox">{goal.completed ? 'X' : ''}</div>
      <div className="goal-text">{goal.text}</div>
    </div>
  );
}

const mapStateToProps = (state: ReduxState, ownProps: OwnProps) => {
  return ({
    goal: state.goals[ownProps.goalId]
  });
}

export default
  connect<StoreProps, {}, OwnProps, ReduxState>(mapStateToProps)(Goal);
