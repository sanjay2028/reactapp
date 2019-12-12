import React, {Component} from 'react';
import { Switch, Route, Redirect,withRouter} from 'react-router-dom';
import Home from './components/Home';
import Errorpage from './components/errorpage';
import Login from './components/login_register/login';
import { Dashboard } from './components/protected';
import ProtectedRoute from './privateroute';
import {connect} from 'react-redux';
import UserProfile from './components/protected/profile';

const Routes = (props) => {
  const {auth} = props;  
  return(   
      <Switch>            
        <Route exact path="/" component={Home} />  
        <Route exact path="/login" render={(props)=>
            (!!!auth)? <Login /> : <Redirect to="/dashboard" />            
          } 
        />                          
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/profile" component={UserProfile} />
        <Route path="*" component={Errorpage} />  
      </Switch>
  );
}

function mapStateToProps(state){
  return {
    auth : state.firebase.auth.uid
  }
}

export default withRouter(connect(mapStateToProps)(Routes));

