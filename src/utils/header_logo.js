import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const BrandLogo = (props) => {
    return (
        <Link to="/home" className="logo">
            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>Admin</b>LTE</span>
        </Link>
    );
};

export default BrandLogo;

BrandLogo.propTypes = {
    linkTo : PropTypes.string.isRequired
}