import React, {Component} from 'react';
import BrandLogo from '../../../utils/header_logo';
import Hamburger from '../../../utils/humbarger';
import UserDropdown from '../../../utils/user_dropdown';
import classnames from 'classnames';

class Header extends Component {
    state = {
        usermenu : false
    }

    toggleUserMenu = () => {
        this.setState({
            usermenu : !this.state.usermenu
        });            
    }

    render() {
        return (
            <header className="main-header">
                <BrandLogo linkTo="#" />                        
                <nav className="navbar navbar-static-top">
                    <Hamburger title="Toggle navigation"/>                    
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className={classnames('dropdown', 'user', 'user-menu', {'open': this.state.usermenu})} onClick={this.toggleUserMenu}>                            
                                <UserDropdown />
                            </li>                            
                        </ul>
                    </div>        
                </nav>
            </header>   
        )         
    }
}

export default Header;