import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import './css/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/login'>Login</Link> <br/>
        <Link to='/protected'>Protected</Link>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/protected' component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
