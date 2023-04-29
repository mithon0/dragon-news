import React from 'react';
import logo from '../assets/logo.png';
import './Header.css'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Container>
            <div className='text-center pt-5'>
                <img src={logo} alt="" />
            </div>
            <h3 className='text-center color pt-4'>Journalism Without Fear or Favour</h3>
            <p className='time text-center'>{moment().format("dddd, MMMM D YYYY")}</p>
            <div className='d-flex p-2 bgg'>
            <Button variant="danger">Latest</Button>
            <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
        </Container>
        
    );
};

export default Header;