import fire from '../firebase/index';

class Auth {

    user = null;    

    constructor(){
        fire.auth().onAuthStateChanged((user)=>{
            this.user = user;
        });        
    } 

    getUser(){        
        return this.user;
    } 

    setUser(user){
        this.user = user;
    } 

    login(user, cb){        
       this.setUser(user);
       cb();
    }

    logout(cb){
        this.user = null;
        this.isLoggedIn = false;
        cb();
    }

    isLoggedIn(){          
        return (this.user !== null)? true : false;
    }

}

export default new Auth();