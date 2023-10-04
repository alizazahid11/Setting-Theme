import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Card, // Import Card component from reactstrap
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="half-background">
      <Nav>
        <NavItem>
          <NavLink href="#" className='material '>
            Material Kit React
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className='Components '>
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
          <NavLink href="#" className='Upgrade'>
            Upgrade To Pro
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='Download'>
            Download
          </NavLink>
        </NavItem>
        <NavItem>
          <div className="social-icons">
            <a href="https://www.instagram.com" className='social-icon'>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com" className='social-icon'>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className='social-icon'>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </NavItem>
      </Nav>
      <div className="circle-image">
        <img
          src="https://picsum.photos/100/100" // Replace with your image URL
          alt="Circle"
          className="circle"
        />
    
      {}
      <Card style={{ width: '90rem', height: '400px'}} className='cards'>
     
        <CardBody className='card-body'>
          <CardTitle tag="h5" className='title'>Aliza Zahid</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    </div>
  );
}

export default Example;
