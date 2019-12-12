import React, {Component} from 'react';

class Hamburger extends Component{
    state = {
        sidebarCollapsed : false
    }

    ClickHandler = (e)=>{   
        if(this.state.sidebarCollapsed){
            document.body.classList.remove('sidebar-collapse')    
            this.setState({sidebarCollapsed : false});    
        } else {
            document.body.classList.add('sidebar-collapse')    
            this.setState({sidebarCollapsed : true});    
        }                     
    }

    render(){
        return(        
            <div>
            <a className="sidebar-toggle" data-toggle="push-menu" role="button" onClick={this.ClickHandler}>
                <span className="sr-only">{this.props.title}</span>
            </a> 
            </div>                       
        )
    }

}

 export default Hamburger;