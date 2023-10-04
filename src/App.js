import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css'
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    
    <Nav >
      <NavItem>
        <NavLink href="#"className='material'>
          Material Kit React
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret className='Components'>
          Components
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#" className='Upgrade' >Upgrade To Pro</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#"className='Download'>Download</NavLink>
      </NavItem>
      <NavItem>
      <div className="social-icons">
      <a href="https://www.instagram.com" className='social-icon'>
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com"className='social-icon'>
      <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com"className='social-icon'>
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
      </NavItem>
    </Nav>
  );
}

export default Example;
