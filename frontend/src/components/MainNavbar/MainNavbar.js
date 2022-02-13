import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import logo from '../../image/Photos and Icons/logo.png'
import css from './MainNavbar.css'

const MainNavbar = () => {


    const [value, setValue] = useState(false);

    const handleButton = () => {

        setValue(!value)
        console.log(value)

    }

    return (


        <>
            <div style={{ display: "flex" }}>

                <div style={{ width: '85%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '2px solid grey' }}>
                    <div>
                        <Nav> <img src={logo} width="170px" alt="" /></Nav>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 800, marginRight: 15 }}>Daily Menu</h4>
                    </div>
                </div >



                <div style={{ display: 'flex', alignItems: 'center' }}>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: "40px", height: "40px", backgroundColor: '#51b855', borderRadius: '80%', color: 'white', display: 'inline-block', marginLeft: '13px' }}>
                            <h5 style={{ marginTop: '10px', }}>5$</h5>
                        </div>
                        <h5 style={{ fontWeight: 800, marginLeft: '8px', marginRight: '5px' }}>Lunch</h5>
                    </div>

                    <div>
                        {
                            value === false && (
                                <button onClick={handleButton} style={{ borderColor: 'transparent', backgroundColor: "transparent" }}> <i style={{ fontSize: '30px', color: '#51b855' }} class="fas fa-bars"></i> </button>
                            )
                        }


                        {
                            value === true && (
                                <button onClick={handleButton} style={{ borderColor: 'transparent', backgroundColor: "transparent" }}> <i style={{ fontSize: '35px', color: '#51b855' }} class="fas fa-times"></i> </button>
                            )
                        }

                    </div>
                </div>



            </div >

            {
                value === true && (
                    <div style={{ width: '100%', backgroundColor: "rgb(215 213 213)" }}>
                        <div className='MainNav-menue' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: "", margin: ' 30px   auto ', padding: 20 }}>
                            <div>    <Nav.Link href="/home"><h3 style={{ color: "black" }}>Profile</h3></Nav.Link> </div>
                            <div>   <Nav.Link href="/home"><h3 style={{ color: "black" }}>My Orders</h3> </Nav.Link> </div>
                            <div>    <Nav.Link href="/home"><h3 style={{ color: "black" }}>Promotion</h3></Nav.Link> </div>
                            <div>     <Nav.Link href="/home"><h3 style={{ color: "black" }}>My Card</h3></Nav.Link></div>
                            <div>   <Nav.Link href="/home"><h3 style={{ color: "black" }}>Log Out</h3> </Nav.Link> </div>
                        </div>
                    </div>

                )
            }
        </>


    );
};

export default MainNavbar;