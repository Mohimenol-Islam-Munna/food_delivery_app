import React from 'react';
import { Button, Container } from 'react-bootstrap';
import css from './FoodDetail.css'
import logo1 from '../../image/Photos and Icons/icon10.png'
import logo2 from '../../image/Photos and Icons/icon11.png'
import logo3 from '../../image/Photos and Icons/icon12.png'
import Footer from '../Footer/Footer';
import MainNavbar from '../MainNavbar/MainNavbar';

const FoodDetail = () => {
    return (
        <Container style={{ backgroundColor: 'white', padding: "50px  20px" }}>
            <MainNavbar></MainNavbar>
            <div className='food-detail' style={{ display: 'flex', marginTop: 120, marginBottom: 120 }}>

                <div style={{ width: "55%", height: 480, backgroundColor: 'grey' }}>

                </div>
                <div className='iteam-detail' style={{ marginLeft: 40, width: '45%' }}>
                    <div style={{ width: 100, height: 40, backgroundColor: 'orange' }}>
                        <h3 style={{ color: 'white', marginTop: -30 }}>MEAT</h3>
                    </div>
                    <div style={{ textAlign: 'left' }}>

                        <h2 id='food-h2' style={{ fontWeight: 700, color: 'black', fontSize: 50 }}>Cheeseburger W/ Chips</h2>
                        <h3>Rice,PointS beans,Carne asada, fries, sour
                            cream, guacamole and cheese</h3>
                    </div>
                    <div style={{ textAlign: 'left', margin: '30px 0' }}>
                        <h5 style={{ fontWeight: 800 }}>CONTAINS</h5>
                        <img src={logo1} width="60px" alt="" />
                        <img style={{ marginRight: 25, marginLeft: 25 }} src={logo2} width="60px" alt="" />
                        <img src={logo3} width="60px" alt="" />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ fontWeight: 800 }}>$10.99</h2>
                        <p style={{ fontSize: 40, fontWeight: 400, marginBottom: 0 }}>+$2 delivery + tax</p>
                        <p style={{ color: 'grey', fontSize: 20 }}>Place your pre-order for wednesday,Fed 2nd below</p>

                        <div className='food-button'>

                            <Button style={{ backgroundColor: '#51b855', borderColor: 'transparent', width: '200px', marginBottom: 10, marginRight: 40 }}><h4 style={{}}>PLACE ORDER</h4></Button>


                            <Button className='food-button-2' style={{ backgroundColor: 'white', color: 'red', border: '2px solid red', width: '200px', }}><h4>CANCEL</h4></Button>

                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <Footer></Footer>
        </Container >
    );
};

export default FoodDetail;