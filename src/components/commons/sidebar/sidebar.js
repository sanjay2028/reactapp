import React, {Component } from 'react';
import Userpanel from './userpanel';
import MainNavigation from '../../../containers/common/main-navigation';
import NavigationState from './navigation-list';

class Sidebar extends Component {
    state = {
      navList : NavigationState
    }    
    
    
    render(){
        return (    
            <aside className="main-sidebar">
                <section className="sidebar">                
                    <Userpanel />
                    <form method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form>
                     <MainNavigation />
                </section>
            </aside>
        );
    }
};

export default Sidebar;