import React from 'react';
import { NavLink } from 'react-router-dom';

const GoalTypeOptions: React.FC = () => (
  <ul className="goal-types-list">
    <li className="goal-type-selector">
        <NavLink to="/daily">Daily</NavLink>
    </li>
    <li className="goal-type-selector">
      <NavLink to="/weekly">Weekly</NavLink>
    </li>
    <li className="goal-type-selector">
      <NavLink to="/monthly">Monthly</NavLink>
    </li>
  </ul>
);

export default GoalTypeOptions;
