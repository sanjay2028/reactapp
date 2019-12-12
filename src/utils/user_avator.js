import React from 'react';
import {Link} from 'react-router-dom';

const DropdownAvator = (props) => {    
    return (        
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src={props.image} className="user-image" alt="User Image" />
            <span className="hidden-xs">{props.fullName}</span>
        </a>        
    );
};

export default DropdownAvator;