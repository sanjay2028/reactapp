import React, { Component } from 'react';

class index extends Component {
    componentDidMount(){
        document.body.classList.remove("skin-blue","sidebar-mini");        
    }    
    render() {
        return (
            <div>
               Welcome To Home. The landing page. 
            </div>
        );
    }
}

export default index;