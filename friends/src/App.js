import React from 'react';
import './App.css';
import LoginComp from './components/LoginComp';
import FriendsComp from './components/FriendsComp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//re-factored for web28
function App() {


  return (

    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsComp} />
          <Route path="/login" component={LoginComp}/>
          <Route component={LoginComp} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
