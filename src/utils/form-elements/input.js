import React from 'react';
import classnames from 'classnames';

export default (props) => {
    const {config, valid, validationMessage, validationClass, value, icon, onValueChange} = props;    
    return (
        <div className={classnames('form-group', validationClass)} >
            <input {...config} className="form-control"  value={value} onChange={(e)=>{
                const data = {
                    event : e,
                    key : props.config.name
                }
                onValueChange(data);
            }} />
            <span className={`glyphicon ${icon} form-control-feedback`}></span>
            { !valid && <span className="help-block">{validationMessage}</span> }
        </div>
    );
};