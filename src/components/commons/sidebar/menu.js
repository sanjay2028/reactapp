import React, { Component } from 'react';

class Menu extends Component {
    render(props) {
        return (
            <li className="treeview">
                <a href="/index3">
                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li className="active"><a href="/index"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                    <li><a href="/index2"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                </ul>
            </li>
        );
    }
}

export default Menu;

Menu.defaultProps = {
    icon : 'Dashboard',
    title : 'New Element',
    links : {}
}