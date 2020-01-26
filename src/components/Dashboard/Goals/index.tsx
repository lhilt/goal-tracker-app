import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Goal from './Goal';
import { TGoal, ReduxState } from '../../../types';
import './Goals.scss';

interface StoreProps {
  goals: TGoal[];
}

type TParams = { goalType: string };
type RouterProps = RouteComponentProps<TParams>;
type TProps = StoreProps & RouterProps;

const Goals: React.FC<TProps> = (props) => {
  const { goalType } = props.match.params;
  return (
    <div className="goal-category">
      <h2>{`your ${goalType} goals`}</h2>
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

export default withRouter(
  connect<StoreProps, {}, RouterProps, ReduxState>(mapStateToProps)(Goals)
);
