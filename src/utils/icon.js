import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = (props) => 
     <Fragment>
        <i className={classnames('fa', 'fa-' + props.iconName)}></i> <span>{props.iconText}</span>
    </Fragment>

export default Icon;

Icon.propTypes = {
    iconName: PropTypes.string.isRequired, 
    iconText: PropTypes.string
}