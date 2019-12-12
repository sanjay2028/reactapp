import React, { Component } from 'react';
import {Formtextbox, Formcheckbox, Formbutton, SocialButton} from '../utils/form-elements/';
import {Link} from 'react-router-dom';

class Register extends Component {

    state = {
        firstname : {            
            label : "First Name",
            name : "firstname",
            id : "firstname",
            value : "",
            placeholder : "First Name",
            type : "text",
            icon : 'glyphicon-user',
            cols : 2
        }, lastname : {
            label : "Lst Name",
            name : "lastname",
            id : "lastname",
            value : "",
            placeholder : "Last Name",
            type : "text",
            icon : 'glyphicon-user',
            cols : 2         
        }, username : {
            label : "Email",
            name : "username",
            id : "username",
            value : "",
            placeholder : "Email",
            type : "email",
            icon : 'glyphicon-envelope',
            cols : 1        
        }, password : {
            label : "Password",
            name : "password",
            id : "password",
            value : "",
            placeholder : "Password",
            type : "password",
            icon : 'glyphicon-lock',
            cols : 1        
        },  repassword : {
            label : "Confirm Password",
            name : "repassword",
            id : "repassword",
            value : "",
            placeholder : "Retype Password",
            type : "password",
            icon : 'glyphicon-lock',
            cols : 1     
        },  rememberme : {
            label : "I agree to the terms",
            name : "agreetoterms",
            id : "agreetoterms",
            value : 1,
            placehodler : "",
            type : "checkbox",
            icon : ""
        }
    };
    
    textInputOnChange = (data) => {
        const {event, key} = data;
        const newValue = event.target.value;
        
        this.setState((state) =>{
            return state[key].value = newValue;
        });
    }

    componentDidMount() {
        document.body.classList.remove('skin-blue', 'sidebar-mini');
        document.body.classList.add('register-page');
    }

    render() {
        return (
            <div className="register-box">
                <div className="register-logo"><a href="../../index2.html"><b>Admin</b>LTE</a></div>
                <div className="register-box-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form action="../../index.html" method="post">
                        <div className="row">
                            <div className="col-sm-6">
                                <Formtextbox 
                                    name={this.state.firstname.name}
                                    id={this.state.firstname.id}
                                    type={this.state.firstname.type}
                                    placeholder={this.state.firstname.placeholder}
                                    value={this.state.firstname.value}
                                    icon={this.state.firstname.icon}
                                    onValueChange={this.textInputOnChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <Formtextbox 
                                    name={this.state.lastname.name}
                                    id={this.state.lastname.id}
                                    type={this.state.lastname.type}
                                    placeholder={this.state.lastname.placeholder}
                                    value={this.state.lastname.value}
                                    icon={this.state.lastname.icon}
                                    onValueChange={this.textInputOnChange}
                                />
                            </div>
                        </div>

                        <Formtextbox 
                            name={this.state.username.name}
                            id={this.state.username.id}
                            type={this.state.username.type}
                            placeholder={this.state.username.placeholder}
                            value={this.state.username.value}
                            icon={this.state.username.icon}
                            onValueChange={this.textInputOnChange}
                        />

                       <Formtextbox 
                            name={this.state.password.name}
                            id={this.state.password.id}
                            type={this.state.password.type}
                            placeholder={this.state.password.placeholder}
                            value={this.state.password.value}
                            icon={this.state.password.icon}
                            onValueChange={this.textInputOnChange}
                        /> 

                        <Formtextbox 
                            name={this.state.repassword.name}
                            id={this.state.repassword.id}
                            type={this.state.repassword.type}
                            placeholder={this.state.repassword.placeholder}
                            value={this.state.repassword.value}
                            icon={this.state.repassword.icon}
                            onValueChange={this.textInputOnChange}
                        /> 
                        
                        <div className="row">
                            <div className="col-xs-8"><Formcheckbox value={this.state.rememberme.value} label={this.state.rememberme.label} /></div>                            
                            <div className="col-xs-4"><Formbutton label="Sign IN"/></div>        
                        </div>                        
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <SocialButton icon="facebook" oAuth={true} label="Sign in using Facebook" />
                        <SocialButton icon="google" oAuth={true} label="Sign in using Google+" />   
                    </div>
                    <Link to="/login" className="text-center">I already have a membership</Link>
                </div>
                
            </div>
        );
    }
}

export default Register;