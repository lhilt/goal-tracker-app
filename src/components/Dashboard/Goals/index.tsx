import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Goal from './Goal';
import './Goals.scss';

interface Props {
  goals: any;
  match: any;
  history: any;
  location: any;
}

const Goals: React.FC<Props> = (props) => {
  const { goalType } = props.match.params;
  return (
    <div className="goal-category">
      <h2>{`your ${goalType} goals`}</h2>
      <div className="goal-list">
        {props.goals.map((goal: any) => (
          <Goal key={goal.id} text={goal.text} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { goalType } = ownProps.match.params;
  return ({
    goals: Object.values(state.goals).filter(
      (goal: any) => goal.goalType === goalType
    )
  });
};

export default withRouter(connect(mapStateToProps)(Goals));
