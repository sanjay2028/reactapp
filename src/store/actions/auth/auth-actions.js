const signIn = ({username, password}) => {
    return (dispatch, getState, {getFirebase}) => {            
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(() => {
            dispatch({type : 'LOGIN_SUCCESS', loginError : null})
        }).catch(({code, message})=>{
            dispatch({type : 'LOGIN_FAILED',loginError : message})
        })
    }
}    

const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type : 'LOGOUT_SUCCESS',loginError : null})
        }).catch(({code,message})=>{
            dispatch({type : 'LOGOUT_FAILED',loginError : message})
        })
    }
}

export {signIn, signOut};