import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Submenu =  (props) => {
    const subMenuItemsList = props.nodes.map((node, index) => {
        return (
            <li key={node.title+index} className={classnames({'active' : node.active})}>
                 <Link to={node.title}>
                    <i className="fa fa-circle-o"></i>{node.title}
                </Link>
            </li>
        )
    });    
    let style={display: 'none'};
    if(props.isActive){
        style={display: 'block'};
    } 

    return <ul className="treeview-menu" style={style}>{subMenuItemsList}</ul>
}

export default Submenu;

Submenu.propTypes = {
    nodes : PropTypes.array.isRequired,
    isActive: PropTypes.bool
}


