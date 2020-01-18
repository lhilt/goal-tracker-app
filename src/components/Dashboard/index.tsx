import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Goals from './Goals';
import './Dashboard.scss';

interface Props {
  username: string;
}

const Dashboard: React.FC<Props> = ({ username }) => {
  return (
    <div className="dashboard">
      <h1 className="welcome">
        {`Welcome${username.length > 0 ? `, ${username}!` : "!"}`}
      </h1>
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
      <Switch>
        <Route
          path={`/:goalType`}
          render={() => (
            <Goals />
          )}
        />
      </Switch>
    </div>
  );
}

export default Dashboard;
