import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

export default props => {
    const {nodes, active} = props;    
    let treeElements = "";
    if(nodes !== undefined){
       treeElements = nodes.map((item, index)=>{
            return <li className={classNames({'active' : (index===0)? true : false})} key={index}>
                <Link to={item.linkTo}> 
                    <i className="fa fa-circle-o"></i> {item.title}
                </Link>
            </li>
        });
    }    
    return(
        <Fragment>
            { (nodes !== "undefined")&& <ul className="treeview-menu" style={{display: (active)? 'block' : 'none'}}>{treeElements}</ul> }
        </Fragment>
    )

}