import React from 'react';

export default (props) => {
    const {name, label, id, value, type} = props;
    return (
        <div className="checkbox icheck">
            <label><input name={name} id={id} value={value} type="checkbox" />{label}</label>
        </div>
    );
};