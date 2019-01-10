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
            <NavbarBrand href="/"> <h3 className="NavHover">Doctor Tech</h3></NavbarBrand>
            <Nav>
              <NavItem className="NavHover">
                <NavLink exact="true" href="/signup" className="mdFont NavHover" >Create account</NavLink>
              </NavItem>
              <NavItem className="NavHover">
                <NavLink exact="true" href="/signin"  className="mdFont NavHover">Login</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header
