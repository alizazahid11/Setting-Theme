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
import { faHeart, faPalette ,faSpinner} from '@fortawesome/free-solid-svg-icons';
function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[ThemeDark,SetThemeDark]=useState(false);
  const [bodycolor, SetbodyColor] = useState('');
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const togglethem=()=>{SetThemeDark(!ThemeDark);
  SetbodyColor(ThemeDark?'':'black')}
  const bgcolor=ThemeDark?'grey':'';
  const cardcolor=ThemeDark?'black':'';
  const textColor = ThemeDark ? 'white' : '';
  return (
    <div className="half-background"style={{ background:bgcolor }}>
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

        { }
       <div><Button onClick={togglethem} className='theme'>Change Theme</Button></div> 
        <Card style={{ width: '90rem', height: '470px', backgroundColor: cardcolor  }} className='cards'>

          <CardBody className='card-body'style={{backgroundColor:cardcolor,color:textColor}} >
            <CardTitle tag="h5" className='title'>Aliza Muhammad Zahid</CardTitle>
            <CardSubtitle className="mb-2 text-muted title2" tag="h6" >WEB DEVELOPER</CardSubtitle>
            <div className="social-icons2">
              <a href="https://www.twitter.com" className='social-icon2'>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>

              <a href="https://www.instagram.com" className='social-icon2'>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com" className='social-icon2'>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
            <div className='text'>
              <p>  As a web developer, my role revolves around crafting digital experiences on the internet. I specialize in transforming ideas and designs into interactive websites and web applications, using a combination of programming languages, frameworks, and design principles. My work involves coding the frontend to ensure a visually appealing and user-friendly interface, as well as developing the backend to handle data and functionality.</p>
            </div>
            <div className="social-ic">
              <div className='social-i one'>
                <FontAwesomeIcon icon={faSpinner} size="2x" /> <p className='para1 '>Studio</p></div>
                
            

              <div className='social-i two'>
                <FontAwesomeIcon icon={faPalette} size="2x" />  <p className='para2'>Work</p></div>
               
             
              <div className='social-i three'>
                <FontAwesomeIcon icon={faHeart} size="2x" /> <p className='para3'>Favourite</p></div>
               
              </div>
          </CardBody>
        </Card>
      </div>
   
    </div>
  );
}

export default Example;
