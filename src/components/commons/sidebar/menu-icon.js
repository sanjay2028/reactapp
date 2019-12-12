import React, {Fragment} from 'react';
import classNames from 'classnames';

export default props => 
<Fragment>
    <i className={classNames('fa', 'fa-'+props.icon)}></i> <span>{props.title}</span>
</Fragment>