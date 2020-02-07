import React, { useState } from 'react';
import { Dispatch as ReduxDispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Goal from './Goal';
import VisibilityOptions from './VisibilityOptions';
import { ReduxState } from '../../../types';
import { addGoal, TGoalAction } from '../../../actions';
import './Goals.scss';

interface StoreProps {
  goalIds: string[];
}

type TParams = { goalType: string };
type RouterProps = RouteComponentProps<TParams>;

type Dispatch = ReduxDispatch<TGoalAction>;
interface DispatchProps {
  onSubmit: (text: string) => void;
}

type Props = StoreProps & RouterProps & DispatchProps;

const Goals: React.FC<Props> = (props) => {
  const { goalType } = props.match.params;
  const [newGoalText, handleChange] = useState('');
  const [showForm, toggleForm] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit(newGoalText);
    toggleForm(false);
    handleChange('');
  };

  return (
    <div className="goal-category">
      <div className="goals-header">
        <h2>{`your ${goalType} goals`}</h2>
        <div
          className="add-goal-btn"
          onClick={() => toggleForm(true)}
        >
          + add a goal
        </div>
      </div>
      <div className="goal-list">
        {props.goalIds.map((goalId: string) => (
          <Goal key={goalId} goalId={goalId} />
        ))}
        {showForm
          ?
          <form onSubmit={handleSubmit}>
            <input
              className="add-goal-form"
              autoFocus
              onChange={(e: any) => handleChange(e.target.value)}
              value={newGoalText}
            />
          </form>
          :
          null
        }
        <VisibilityOptions />
      </div>
    </div>
  );
};

const mapStateToProps = (state: ReduxState, ownProps: RouterProps) => {
  const { goalType } = ownProps.match.params;
  const { showCompleted } = state.visibility;
  return ({
    goalIds: Object.values(state.goals).filter(
      (goal: any) => {
        if (showCompleted) {
          return goal.goalType === goalType;
        } else {
          return goal.goalType === goalType && !goal.completed;
        }
      }
    ).map(goal => goal.id)
  });
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouterProps) => {
  const { goalType } = ownProps.match.params;
  return ({
    onSubmit: (text: string) => dispatch(addGoal(text, goalType))
  });
};

const areStatePropsEqual = (next: StoreProps, prev: StoreProps) => {
  if (next.goalIds.length !== prev.goalIds.length) {
    return false;
  }
  for (let i = 0; i < next.goalIds.length; i++) {
    if (next.goalIds[i] !== prev.goalIds[i]) {
      return false;
    }
  }
  return true;
};

export default withRouter(
  connect<StoreProps, DispatchProps, RouterProps, ReduxState>(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { areStatePropsEqual }
  )(Goals)
);
