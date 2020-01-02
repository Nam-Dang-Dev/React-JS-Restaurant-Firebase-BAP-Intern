import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch, withRouter} from "react-router-dom";
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import CartContainer from './containers/CartContainer';
import HomeContainer from './containers/HomeContainer';
import ProfileContainer from './containers/ProfileContainer'

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={RegisterContainer} />
          <Route path = "/cart" exact component ={CartContainer} />
          <Route path = "/profile" exact component ={ProfileContainer} />

     
      </Switch>
    </div>
    
  );
}

export default withRouter(App);
