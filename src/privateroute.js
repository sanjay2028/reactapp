import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Userpanel from './HOC/userpanel';

const ProtectedRoute = (props)=> {
    const {component : Component, auth, ...rest} = props;     
    return (
        <Route {...rest} render={(props) => {               
            if(auth && typeof auth !== undefined){
                return <Userpanel><Component {...props} /></Userpanel>
            } else {
                return <Redirect to="/login" />
            }    
        }} />
    );
}

function mapStateToProps(state){
    return {
        auth : state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(ProtectedRoute);