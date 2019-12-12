import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import DropdownAvator from './user_avator';
import userimage from '../resources/images/user2-160x160.jpg';
import Logout from './logout-btn';

const UserDropdown = (props) => {
    
    return(
        <Fragment>            
            <DropdownAvator image={userimage} fullName="Alexander Pierce" />
            <ul className="dropdown-menu">
                <li className="user-header">
                    <img src={userimage} className="img-circle" alt="User Image" />
                    <p>Alexander Pierce - Web Developer<small>Member since Nov. 2012</small></p>
                </li>
                <li className="user-body">
                    <div className="row">
                        <div className="col-xs-4 text-center"><Link to="/demo22">Followers</Link></div>
                        <div className="col-xs-4 text-center"><Link to="/demo22">Sales</Link></div>
                        <div className="col-xs-4 text-center"><Link to="/demo22">Friends</Link></div>
                    </div>
                </li>

                <li className="user-footer">
                    <div className="pull-left"><Link to="/demo22" className="btn btn-default btn-flat">Profile</Link></div>
                    <div className="pull-right">
                        <Logout logoutText="Sign Out" />
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}
export default UserDropdown;