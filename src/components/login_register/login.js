import React, {Component} from 'react';
import BrandLogo from '../../utils/header_logo';
import {Formtextbox, Formcheckbox, Formbutton, SocialButton, Formwarning} from '../../utils/form-elements';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn, signOut} from '../../store/actions/auth/auth-actions';
import fire from '../../firebase';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            formValid: false,
            formSuccess: '',
            formError: '',
            processing : false,
            formData : {
                username : {
                    label : "Email",
                    value : "",
                    icon : 'glyphicon-envelope',
                    config : {
                        id : "username",
                        type : "email",
                        placeholder : "Email",
                        name : "username"
                    },
                    validation : {
                        required: true,
                        email : true
                    },
                    valid : false,
                    validationMessage : '',
                    validationClass: ''
                }, password : {
                    label : "Password",
                    value : "",
                    icon : 'glyphicon-lock',
                    config : {
                        id : "password",
                        type : "password",
                        placeholder : "Password",
                        name : "password"
                    },
                    validation : {
                        required: true,
                        email : false
                    },
                    valid : false,
                    validationMessage : '',
                    validationClass: ''
                }
            }, rememberme : {
                    label : "Remember Me",
                    name : "rememberme",
                    id : "rememberme",
                    value : 1,
                    placehodler : "",
                    type : "checkbox",
                    icon : ""
                }
            
        }        
    }
           

    textInputOnChange = (data) => {
        const {event, key} = data;
        const newValue = event.target.value;                        
        let valid = false;
        let validationMessage = '';
        let validationClass = "has-error";
        switch(key){
            case    "username":
                    if(newValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                        valid = true; validationMessage = ""; 
                    } else {
                        valid = false; validationMessage = "Invalid Email";                    
                    }
                    break;

            case    "password":
                    if(newValue.length < 5){
                        valid = false; validationMessage = "Password invalid or too short";                                            
                    } else {
                        valid = true; validationMessage = "";  
                    }
                    break;  
            default: break;
        }

        this.setState((state) =>{
            state.formData[key].value = newValue;
            state.formData[key].valid = valid;
            state.formData[key].validationMessage = validationMessage;
            state.formData[key].validationClass = valid ? 'has-success' : validationClass;            
            return state;
        });
    }
    
    validateForm = ()=>{        
        const {username, password} = this.state.formData;        
        if(username.valid && password.valid) {          
          this.setState({...this.state, formValid : true});
        } else {
          this.setState({formValid : false})
        }
    }

    submitHandler = (e)=>{ 
        e.preventDefault();
        this.setState({...this.state, formError : ""});                
        this.validateForm();        
        if(this.state.formValid === true){                 
            const {username, password } = this.state.formData;            
            this.props.signIn({username : username.value, password : password.value});
        } else {
            console.log("Form Validation", this.state);
        }
    }

    componentDidMount(){
        document.body.classList.remove('skin-blue', 'sidebar-mini');
        document.body.classList.add('login-page');
    }

    render(){
        const {username, password} = this.state.formData;
        return (
            <div className="login-box">
                <div className="login-logo"><BrandLogo linkTo="#"/></div>  
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="" method="post" onSubmit={(event)=> this.submitHandler(event) }>
                        <Formtextbox 
                            config={username.config}
                            valid={username.valid}
                            validationMessage={username.validationMessage}
                            validationClass={username.validationClass}
                            value={username.value}
                            icon={username.icon}
                            onValueChange={this.textInputOnChange}
                        />

                        <Formtextbox 
                            config={password.config}
                            valid={password.valid}
                            validationMessage={password.validationMessage}
                            validationClass={password.validationClass}
                            value={password.value}
                            icon={password.icon}
                            onValueChange={this.textInputOnChange}
                        />                      
                        
                        { this.state.formError && <Formwarning warning={this.state.formError} /> }
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
                    <Link to="#">I forgot my password</Link><br />
                    <Link to="/register" className="text-center">Register a new membership</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        auth : state.auth
    }
}

function mapDispatchToProps(dispatch){
    return {
        signIn : (credentials) =>  dispatch(signIn(credentials))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);