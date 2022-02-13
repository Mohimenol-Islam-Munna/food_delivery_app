import React from 'react';
import css from './FirstSec.css'
import bg from '../../../image/Photos and Icons/bg.png'
import bg1 from '../../../image/Photos and Icons/bg-1.png'
import phone from '../../../image/Photos and Icons/phone.png'
import salad from '../../../image/Photos and Icons/salad.png'
// import { Button } from 'react-bootstrap';


const FirstSec = () => {
    return (


        <>
            <div className='home-container' style={{
                background: `url(${bg1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                WebkitBackgroundSize: 'cover',
                height: 600,
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>


                <div className='text-container' style={{
                    color: "white", width: "55%", paddingLeft: 40, textAlign: "left"

                }}>


                    <div style={{ textAlign: 'left', lineHeight: 1.7 }}>
                        <h2> We are a daily lunch service</h2>

                        <div style={{ marginTop: 35, marginBottom: 35 }}>
                            <h5 style={{ margin: 0 }}> <i class="fas fa-check"></i> No Service Fee. No tips.No commitment.</h5>
                            <h5 style={{ margin: 0 }}><i class="fas fa-check"></i>conveniently delivery to your home and office.</h5>
                            <h5 style={{ margin: 0 }}><i class="fas fa-check"></i>perfect for individual or group.</h5>
                            <h5 style={{ margin: 0 }}><i class="fas fa-check"></i>simply reply via SMS or use our website to order</h5>
                        </div>

                        <input className='input' style={{ width: '70%', height: 35, borderColor: 'transparent', borderRadius: 6, marginTop: 20 }} type="text" placeholder='ENTER YOUR LOCATION TO SEE THE MENU TODAY' />

                    </div>
                </div>

                <div className='phone-container' style={{
                    background: `url(${phone})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 120%',
                    backgroundPosition: 'cover',
                    width: "30%",
                    paddingTop: '20px',
                    paddingBottom: '50px',
                    height: "100%",


                }}>

                    <div style={{ fontFamily: 'bold' }}>
                        <div style={{ display: 'flex', justifyContent: 'Space-evenly', marginTop: 70, overflow: 'hidden' }}>
                            <div> <h5>Mon</h5></div>
                            <div> <h5>Thu</h5></div>
                            <h5>Wed</h5>
                            <h5>Thu</h5>
                            <h5>Fri</h5>
                        </div>

                        <div style={{ width: "60%", margin: 'auto', backgroundColor: " #04AA6D" }}>
                            <hr />
                        </div>
                        <h4 style={{ color: '#04AA6D', margin: 0 }}>Daily Menu</h4>
                        <h5 style={{ margin: 0 }}>Ordaring ends at 10.30am</h5>
                        <img src={salad} width="70%" className='img-fluid' alt="" />

                        <h2 className='salad'>salad</h2>
                    </div>
                </div>

            </div >


            <div style={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                marginTop: 0,
                height: 400,
                width: "100%",
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                color: 'white',
                // backgroundColor: "black",
                opacity: 0.6
                // background: "rgba(76,205,140, )"

            }}>


                <div style={{ textAlign: 'left' }}>
                    <h3 style={{ color: 'yellow' }}>Guide des Gourmets</h3>

                    <p style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 30, marginTop: 30 }}>
                        a convenient lunch benefits <br />
                        program that allows the company <br />
                        to offer subsidize meals to <br />
                        employs
                    </p>
                    {/* <Button >GET STARTTED</Button>{' '} */}
                    <button style={{ backgroundColor: '#04AA6D', color: 'white', borderRadius: 7, borderColor: 'transparent', fontSize: 12, fontWeight: 550, paddingLeft: 17, paddingRight: 17, padding: 7 }}>GET STARTED</button>
                </div>

            </div>

            <div className='home-container-2' style={{
                height: 500, width: '100%', backgroundColor: '#eeeeee',
                // padding: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <div style={{ width: "45%", textAlign: 'left' }}>

                    <h2 style={{ fontWeight: 500 }}>What is Guide des Gourmets?</h2>
                    <p>GG makes it easy for employees to order and pay for lunch, and  <br /> even allows employers to provide subsidize meals for their <br /> staff as an added perk. <br />
                        Best of all, we bring lunch to you .No lines,no driving,no hassles.
                    </p>
                </div>

                <div className='iframe' style={{ width: '45%' }}>
                    <div className='iframe-container'>
                        <iframe width="90%" height="300" src="https://www.youtube.com/embed/9YffrCViTVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FirstSec;