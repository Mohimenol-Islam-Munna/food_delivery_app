import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import css from './PasswordReset.css';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header'




const PasswordReset = () => {


    return (
        <Container>

            <Header></Header>



            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ marginBottom: '60px', marginTop: '60px', textAlign: 'left', marginLeft: 30 }}>Password Reset</h1>
                <input placeholder='Email or pnone number' style={{ borderTop: 0, borderRight: 0, borderLeft: "2px solid #D3D3D3", borderBottom: "2 px solid 	#D3D3D3", width: "80%", height: '70px', marginLeft: 30 }} ></input>

                <Button style={{ width: 300, height: '70px', backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", margin: "20px", marginLeft: '40px', marginBottom: '80px', marginTop: 60, }}

                ><h2>SUBMIT</h2></Button>
            </div>

            <Footer></Footer>
        </Container >
    );
};

export default PasswordReset;