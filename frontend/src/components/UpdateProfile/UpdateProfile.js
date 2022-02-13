import React from 'react';
import { Container, Form, Nav } from 'react-bootstrap';

import img from '../../image/Photos and Icons/bg-1.png'
import Footer from '../Footer/Footer';
import MainNavbar from '../MainNavbar/MainNavbar';
const UpdateProfile = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div style={{
                marginTop: 30,
                background: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                WebkitBackgroundSize: 'cover',
                height: 300,
                width: "100%",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2 style={{ fontSize: 60, fontweight: 600, color: "white" }}>Update Your Profile</h2>
            </div>

            <Container style={{ marginTop: 100 }}>
                <Nav.Link style={{ marginBottom: 40, MarginTop: 100, color: 'black' }} href="/#"><h1>Profile</h1></Nav.Link>
                <hr />
                <Nav.Link style={{ marginBottom: 40, MarginTop: 60, color: 'black' }} href="/#"><h1>Location</h1></Nav.Link>
                <hr />

                <Nav.Link style={{ marginBottom: 40, MarginTop: 60, color: 'black' }} href="/home"><h1>Email  Prefrence</h1></Nav.Link>
                <hr />
                <Nav.Link style={{ marginBottom: 40, MarginTop: 60, color: 'black' }} href="/home"><h1>Push Noification  Prefrence</h1></Nav.Link>
                <hr />
                <Nav.Link style={{ marginBottom: 40, MarginTop: 60, color: 'black' }} href="/home"><h1>Payment info</h1></Nav.Link>
                <hr />


                <h4 style={{ marginTop: "100px", marginBottom: 100 }}><span style={{ color: "gray" }}>You would like to remove your account? </span>Go To hello@peacd.com</h4>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default UpdateProfile;