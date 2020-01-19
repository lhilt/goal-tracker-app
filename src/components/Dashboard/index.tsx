import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Goals from './Goals';
import GoalTypeOptions from './GoalTypeOptions';
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
      <GoalTypeOptions />
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
