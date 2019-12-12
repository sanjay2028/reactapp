import React, {Component, Fragment} from 'react';
import MenuIcon from './menu-icon';
import MenuChildren from './menu-children';
import {Link} from 'react-router-dom'
import classNames from 'classnames';

class SidebarMenu extends Component{
    render(){
        const {title, icon, nodes, isActive, onClickHandler} = this.props;
        return(            
            <Fragment>                
            <li className={classNames({'treeview': true}, {'menu-open' : isActive})}  >
                <Link to="/index3" onClick={(event)=> onClickHandler({event, title})}>
                    <MenuIcon icon={icon} title={title} />
                    {
                        (nodes.length > 0) &&
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    }
                </Link>            
                <MenuChildren nodes={nodes} active={isActive} />
            </li>    
            </Fragment>
        );
    }
}

SidebarMenu.defaultProps = {
    title : 'Item Title',
    icon : 'Dashboard',
    nodes : []
}

export default SidebarMenu;