import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Goals from './Goals';
import './Dashboard.scss';

interface Props {
  username: string;
  history: any;
  location: any;
  match: any;
}

const Dashboard: React.FC<Props> = ({ username }) => {
  const [ goalType ] = useState('daily');
  return (
    <div className="dashboard">
      <h1 className="welcome">
        {`Welcome${username.length > 0 ? `, ${username}!` : "!"}`}
      </h1>
      <Switch>
        <Route
          path={`/:goalType`}
          render={() => (
            <Goals goalType={goalType} />
          )}
        />
      </Switch>
    </div>
  );
}

export default withRouter(Dashboard);
