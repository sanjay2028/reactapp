import React, {Fragment, Component}  from 'react';
import Header from '../containers/common/header/header';
import {Footer, Sidebar} from '../components/commons';
import Auth from '../authentication';

class Userpanel extends Component{
    
    
    componentDidMount(){
        document.body.classList.add("skin-blue","sidebar-mini");        
    }
    
    render(){
        return(
            <Fragment>
                <Header />                  
                <Sidebar />
                <div className="content-wrapper">{this.props.children}</div>
                <Footer />
            </Fragment>    
        );
    }
}

export default Userpanel;