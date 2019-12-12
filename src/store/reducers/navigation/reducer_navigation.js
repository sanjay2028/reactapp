


const initialState = [
        {
            title : 'Dashboard',
            icon : 'dashboard',
            isActive : false,
            linkTo : '/login',
            nodes : []     
        },{
            title : 'Register',
            icon : 'user',
            isActive : false,
            linkTo : '/register',
            nodes : []     
        }, {
            title : 'Recepies',
            icon : 'users',
            isActive : false,
            linkTo:'#',
            nodes : [
                {title: 'All Users', linkTo: '/users', active: true},
                {title: 'Active', linkTo: '/users/active', active: false},
                {title: 'Suspenced Users', linkTo: '/users/suspenced', active: false},
                {title: 'Banned Users', linkTo: '/users/banned', active: false},
            ]             
        }, {
            title : 'Users',
            icon : 'users',
            isActive : false,
            linkTo:'#',
            nodes : [
                {title: 'All Users', linkTo: '/users'},
                {title: 'Active', linkTo: '/users/active'},
                {title: 'Suspenced Users', linkTo: '/users/suspenced'},
                {title: 'Banned Users', linkTo: '/users/banned'},
            ]             
        }
    ];
    
    const navigationList = (state = initialState, action) => {        
        switch(action.type){
            case 'ITEM_CLICKED':                 
                const newItems = state.filter((child) =>{                
                    if(action.item.title === child.title){                    
                        child.isActive = true;
                        child.title = child.title;
                    } else {
                        child.isActive = false;                    
                    }
                    return child;
                });
                return newItems;
                break;
            
            default :
                return state;
                break;
        }
        
    }
    
    export default navigationList;