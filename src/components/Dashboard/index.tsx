import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Goals from './Goals';
import './Dashboard.scss';

interface Props {
  username: string;
}

interface State {
  goalType: string;
}

class Dashboard extends Component<Props, State> {
  state = {
    goalType: 'daily',
  }

  render() {
    const { username } = this.props;
    const { goalType } = this.state;
    return (
      <div className="dashboard">
        <h1 className="welcome">{`Welcome${username.length > 0 ? `, ${username}!` : "!"}`}</h1>
        <Switch>
          <Route
            path={`/${goalType}`}
            render={() => (
              <Goals goalType={goalType} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Dashboard;
