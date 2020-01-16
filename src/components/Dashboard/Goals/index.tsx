import React from 'react';
import './Goals.scss';

interface Props {
  goalType: string;
}

const Goals: React.FC<Props> = ({ goalType }) => {
  return (
    <div className="goal-category">
      <h2>{`your ${goalType} goals`}</h2>
    </div>
  );
};

export default Goals;
