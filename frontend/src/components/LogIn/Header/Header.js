import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import logo from '../../../image/Photos and Icons/logo.png'
const Header = () => {
    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: 80,


            }}>
                <div className='logo' style={{ justifyContent: 'flex-end', }}>
                    <Nav.Link href="/home"><img src={logo} width='180' alt="" /></Nav.Link>
                </div>


                <div style={{ height: 80, display: 'flex', alignItems: 'center', borderLeft: '2px solid grey' }}>
                    <button style={{ fontWeight: 700, color: "#0cce87", borderColor: 'transparent', backgroundColor: '#f8f9fb', marginLeft: '5px' }}>Sign in</button>
                    <Nav style={{}}><button className='signUp'> Sign Up <i class="fas fa-long-arrow-alt-right"></i></button></Nav>

                </div>

            </div>
        </Container >
    );
};

export default Header;