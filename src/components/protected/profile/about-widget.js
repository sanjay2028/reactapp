import React from 'react';

const ProfileAboutWidget = () => {
    return (
        <div className="box box-primary">
            <div className="box-header with-border"><h3 className="box-title">About Me</h3></div>
            <div className="box-body">
                <strong><i className="fa fa-book margin-r-5"></i> Education</strong>
                <p className="text-muted">B.S. in Computer Science from the University of Tennessee at Knoxville</p>
                <hr />
                <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>
                <p className="text-muted">Malibu, California</p>
                <hr />
                <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
            </div>
        </div>
    );
};

export default ProfileAboutWidget;