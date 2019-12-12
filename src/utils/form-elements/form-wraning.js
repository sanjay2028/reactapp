import React from 'react';

const Formwarning = (props) => {
    return (
        <div className="form-group has-warning">
            <label className="control-label"><i className="fa fa-bell-o"></i> Error</label>
            <span className="help-block">{props.warning}</span>
        </div>        
    );
};

export default Formwarning;
