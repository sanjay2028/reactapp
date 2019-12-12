import React, { Component } from 'react';
import FormInput from '../../../utils/form-elements/input';

class ProfileSettings extends Component {
    render() {
        return (            
            <div className="active tab-pane" id="settings">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10"><input type="email" className="form-control" id="inputName" placeholder="Name" /></div>
                    </div>                    
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputName" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label><input type="checkbox" /> I agree to the <a href="#">terms and conditions</a></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </div>
                </form>
            </div>        
        );
    }
}

export default ProfileSettings;