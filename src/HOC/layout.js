import React, {Component}  from 'react';
import userAuth from '../authentication';
import fire from '../firebase';

class Layout extends Component{    
    constructor(props){
        super(props);        
        
    } 

    componentDidMount(){
        this.authListener();
    }

    authListener(){        
        fire.auth().onAuthStateChanged((user)=>{
            userAuth.setUser(user);
        })
    }

    render(){  
        return this.props.children;        
    }        
}

export default Layout;