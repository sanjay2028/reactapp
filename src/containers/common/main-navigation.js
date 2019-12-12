import React, { Component } from 'react';
import Icon from '../../utils/icon';
import MenuCaret from '../../utils/menu-caret';
import Submenu from '../../utils/navigation-submenu';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { navMenuClicked } from '../../store/actions/navigation/nav-menu-item-clicked';
import Logout from '../../utils/logout-btn';
class MainNavigation extends Component {    
    navMenuItems(){           
        const { navigationList } = this.props;
        return navigationList.map((item, index) => {
            return <li 
                    onClick={() => this.props.navMenuClicked(item)}
                    key={index} 
                    className={classnames({treeview: item.nodes.length}, {"menu-open" : item.isActive})}>
                <Link to={item.linkTo}>                            
                    <Icon iconName={item.icon} iconText={item.title} />
                    { (item.nodes.length > 0) &&  <MenuCaret /> }                    
                </Link>
                {(item.nodes.length > 0) && <Submenu nodes={item.nodes} isActive={item.isActive} /> }                
            </li>
        });             
    }
    
    handleSignout = (event) => {
        event.preventDefault();
        this.props.signOut();
    }
    

    render() {
        console.log(this.props);    
        return (
            <div>
                <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                    {this.navMenuItems()}
                    <li><Logout logoutText="Logout" forSidebar="true" /></li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        navigationList : state.navigationList
    }    
}

function matchDispatchToProps(dispatch){
    return {
        navMenuClicked: (item) => dispatch(navMenuClicked(item))        
    }
}

export default connect(mapStateToProps,  matchDispatchToProps)(MainNavigation);