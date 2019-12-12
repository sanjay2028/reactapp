import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/auth/auth-actions';

class Logout extends Component{    
    constructor(props){
        super(props);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.signOut();
    }
    render(){
        const {logoutText, forSidebar} = this.props;
        let btn = '';
        if(forSidebar == true){
            btn = <a 
                onClick={ event => this.handleClick(event) } 
                style={{"cursor":"pointer"}} 
                className="btn btn-default btn-flat">{this.props.logoutText}
            </a>
        } else {
            btn = <a 
                onClick={ event => this.handleClick(event)}
                style={{"cursor":"pointer"}} >
                <i className="fa fa-lock"></i> 
                <span>{logoutText}</span>
            </a>
        }
        return btn;
    }        
};

function mapDispatchToProps(dispatch){
    return {
        signOut : () => dispatch(signOut())
    }
}

Logout.defaultProps = {
    logoutText: 'Sign Out',
    forSidebar : false
  };

export default connect(null, mapDispatchToProps)(Logout);

