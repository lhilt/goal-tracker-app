import React from 'react';
import './Goal.scss';

interface Props {
  text: string;
}

const Goal: React.FC<Props> = ({ text }) => {
  return (
    <div className="goal">
      <div className="checkbox"></div>
      <div className="goal-text">{text}</div>
    </div>
  );
}

export default Goal;
