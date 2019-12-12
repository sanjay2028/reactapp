import React, {Component} from 'react';
import user_avator from '../../../resources/images/user4-128x128.jpg'
import Modal from 'react-modal';
import Dropzone from 'react-dropzone'
import classNames from 'classnames';

class ProfileAvatorWidget extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen : false            
        }
    }

    openModal = (e) => {
        e.preventDefault();        
        this.setState({modalIsOpen : true});
    }

    afterOpenModal = () => {
        console.log("afterOPenModal");
    }

    closeModal = () => {
        this.setState({modalIsOpen : false});
    }

    render(){    
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };
          
        return (
            <div className="box box-primary">
                <div className="box-body box-profile">
                    <img className="profile-user-img img-responsive img-circle" src={user_avator} alt="User profile picture" />
                    <h3 className="profile-username text-center">Nina Mcintire</h3>
                    <p className="text-muted text-center">Software Engineer</p>
                    <hr />
                    <a style={{"cursor":"pointer"}} onClick={(e) => this.openModal(e)} style={{"marginBottom":"25px"}} className="btn btn-primary btn-block"><strong>Update Avator</strong></a>
                    <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Upload Your Image" >
                        
                    <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps, isDragActive=true}) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          )
        }}
      </Dropzone>


                        <button className="btn btn-secondary bg-aqua" onClick={this.closeModal}>Close</button>                    
                    </Modal>
                    
                    <ul className="list-group list-group-unbordered">
                        <li className="list-group-item"><b>Followers</b> <a className="pull-right">1,322</a></li>
                        <li className="list-group-item"><b>Following</b> <a className="pull-right">543</a></li>
                        <li className="list-group-item"><b>Friends</b> <a className="pull-right">13,287</a></li>
                    </ul>			    
                </div>
            </div>
        );
    }
}    

export default ProfileAvatorWidget;