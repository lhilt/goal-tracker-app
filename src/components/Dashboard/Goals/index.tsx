import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Goals.scss';

interface Props {
  goalType: string;
  changeType: any;
  match: any;
  history: any;
  location: any;
}

const Goals: React.FC<Props> = ({ goalType, changeType, match }) => {
  useEffect(() => {
    const findGoalType = () => {
      changeType(match.params.goalType);
    };
    findGoalType();
  });

  return (
    <div className="goal-category">
      <h2>{`your ${goalType} goals`}</h2>
    </div>
  );
};

export default withRouter(Goals);
