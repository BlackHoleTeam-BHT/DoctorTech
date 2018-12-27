import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <div>
        <Navbar className="primaryColor">
          <div className="container">
            <NavbarBrand href="/dashboard"> <h3 className="NavHover">Doctor Tech</h3></NavbarBrand>
            <Nav>
              <NavItem className="NavHover">
                <NavLink exact href="/signup" activeStyle="active-style" className="mdFont" >Create account</NavLink>
              </NavItem>
              <NavItem className="NavHover">
                <NavLink href="/signin" activeStyle="active-style" className="mdFont">Login</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header
