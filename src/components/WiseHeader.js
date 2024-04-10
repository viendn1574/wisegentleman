'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ResponsiveAppBar from './ResponsiveAppBar';
import './WiseHeader.css'
export default function WiseHeader(props) {
    return (
        <header>
            <div className='w-100 header-bar'>
            <div className='logo_wraper'>
                <a href="/" >
                    <img src="https://wisegentleman.vn/WG.png" className="d-inline-block logo" alt="Wise Gentleman Logo" />
                </a> 
            </div>
            <ResponsiveAppBar/>
            {/* <Navbar className='w-100' bg="white" expand="lg" variant="light">
            <Container style={{justifyContent: 'center'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 mx-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <Nav.Link className='header__menu-link header-menu' href="/">QUẦN SỊP</Nav.Link>
                    <Nav.Link className='header__menu-link header-menu' href="/about">CHÚNG TÔI</Nav.Link>
                    <Nav.Link className='header__menu-link header-menu' href="/tin-tuc">TIN TỨC</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}
            </div>
            {props.banner &&  <div className="text-center bg-image image-header"></div>}
        </header>
    )
}