import React from 'react';
import { Dispatch as ReduxDispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Goal from './Goal';
import { TGoal, ReduxState } from '../../../types';
import { addGoal, TGoalAction } from '../../../actions';
import './Goals.scss';

interface StoreProps {
  goals: TGoal[];
}

type TParams = { goalType: string };
type RouterProps = RouteComponentProps<TParams>;
type Props = StoreProps & RouterProps;

type Dispatch = ReduxDispatch<TGoalAction>;
interface DispatchProps {
  onSubmit: (text: string) => void;
}

const Goals: React.FC<Props> = (props) => {
  const { goalType } = props.match.params;
  return (
    <div className="goal-category">
      <div className="goals-header">
        <h2>{`your ${goalType} goals`}</h2>
        <div className="add-goal-btn">+ add a goal</div>
      </div>
      <div className="goal-list">
        {props.goals.map((goal: TGoal) => (
          <Goal key={goal.id} goalId={goal.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: ReduxState, ownProps: RouterProps) => {
  const { goalType } = ownProps.match.params;
  return ({
    goals: Object.values(state.goals).filter(
      (goal: any) => goal.goalType === goalType
    )
  });
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: RouterProps) => {
  const { goalType } = ownProps.match.params;
  return ({
    onSubmit: (text: string) => dispatch(addGoal(text, goalType))
  });
};

export default withRouter(
  connect<StoreProps, DispatchProps, RouterProps, ReduxState>(
    mapStateToProps,
    mapDispatchToProps
  )(Goals)
);
