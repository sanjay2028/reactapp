import React from 'react';
import usermage from '../../../resources/images/user2-160x160.jpg';

export default props => 
    
    <div className="user-panel">
        <div className="pull-left image">
            <img src={usermage} className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
            <p>Alexander Pierce</p>
            <a href="/ready"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
    </div>