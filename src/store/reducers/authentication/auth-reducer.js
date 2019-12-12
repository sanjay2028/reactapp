const initState = [    
    {loginError : null}
]
    
const Authreducer = (state = initState, {type, loginError}) => {
    switch(type){
        case 'LOGIN_SUCCESS':
        return  {
            ...state, loginError
        }                
               
        case 'LOGIN_FAILED':
        return {
            ...state, loginError
        }
              
        case 'LOGOUT_SUCCESS':
        return {
            ...state, loginError
        }
        
        case 'LOGOUT_FAILED':
        return {
            ...state, loginError
        }

        default:
        return state;
            
    }
}


export default Authreducer;