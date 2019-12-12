import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SocialButton extends Component{
    constructor(props){
        super(props);
    }

    onButtonClicked = (event) => {                   
        if(this.props.oAuth){
            event.preventDefault();            
        }
    }

    render(){
        const { label, icon, oAuth = "false", linkTo = "#" } = this.props;        
        return (            
                <Link 
                    onClick={(event)=>this.onButtonClicked(event)}
                    to={linkTo} 
                    className={`btn btn-block btn-social btn-${icon} btn-flat`}>
                    <i className="fa fa-facebook"></i> 
                    Sign in using Facebook
                </Link>            
        );

    }

}

export default SocialButton;

