import React from 'react';
import css from './PretyCool.css'
import icon2 from '../../../image/Photos and Icons/icon2.png'
import icon3 from '../../../image/Photos and Icons/icon3.png'
import icon4 from '../../../image/Photos and Icons/icon4.png'
import { Nav } from 'react-bootstrap';

const PretyCool = () => {
    return (
        <div >
            <h3 style={{ fontWeight: 800, fontSize: 19, marginTop: 50 }} >Pretty Cool,Yeah ?</h3>
            <p> well it gets better,GG is crazy simple to use.Here's how it works</p>

            <div className='prety-container' style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: 50


            }}>

                <div>
                    <img style={{ marginLeft: 30, marginBottom: 40 }} src={icon2} width="90%" alt="" />
                    <h3>Daily menu via Text</h3>
                    <p>simply reply with your dish choice <br />
                        before the cutoff
                    </p>
                </div>
                <div style={{ padding: 30, }}>
                    <img style={{ marginBottom: 40 }} src={icon3} width="90%" alt="" />
                    <h3>Lunch Arrives </h3>
                    <p>we'll notify you via text when lunch <br />
                        arrives at your office
                    </p>

                </div>
                <div>
                    <img style={{ marginBottom: 40 }} src={icon4} width="90%" alt="" />
                    <h3>Grab Your Lunch</h3>
                    <p>Find dish type you ordered and <br />
                        enjoy your lunch
                    </p>
                </div>

            </div>
            <div style={{ marginTop: 40 }}>
                <div style={{ width: '100%', height: '10%', backgroundColor: '#f2f260bf', paddingTop: 11, paddingBottom: 11 }}>
                    <Nav.Link href="/login">  <button style={{ backgroundColor: 'white', color: 'green', borderRadius: 7, borderColor: 'transparent', fontSize: 15, fontWeight: 550, paddingLeft: 12, paddingRight: 12, }}>Join GG Today</button></Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default PretyCool;