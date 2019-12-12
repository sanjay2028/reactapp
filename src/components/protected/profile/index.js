import React, { Component, Fragment } from 'react';
import SectionTitle from '../../../utils/section-title';
import ProfileAvatorWidget from './avator-widget';
import ProfileAboutWidget from './about-widget';
import ProfileSettings from './profile-settings';

class UserProfile extends Component {
    render() {
        return(
            <Fragment>
                <SectionTitle title="User Profile" />
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <ProfileAvatorWidget />
                            <ProfileAboutWidget />
                        </div>
                        <div className="col-md-9">
                            <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">                                                                
                                <li className="active"><a href="#settings" data-toggle="tab">Settings</a></li>
                            </ul>
                            <div className="tab-content">
                                <ProfileSettings />
                            </div>                                

                            </div>
                        </div>
                    </div>    
                </section>
            </Fragment>
        );
    }                                                            
}                                                
                                                
export default UserProfile;