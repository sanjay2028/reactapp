export default [
    {
        title : 'Dashboard',
        icon : 'dashboard',
        isActive : false,
        nodes : []     
    }, {
        title : 'Recepies',
        icon : 'users',
        isActive : false,
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
        nodes : [
            {title: 'All Users', linkTo: '/users'},
            {title: 'Active', linkTo: '/users/active'},
            {title: 'Suspenced Users', linkTo: '/users/suspenced'},
            {title: 'Banned Users', linkTo: '/users/banned'},
        ]             
    },{
        title : 'Logout',
        icon : 'lock',
        isActive : false,
        nodes : []     
    }
];