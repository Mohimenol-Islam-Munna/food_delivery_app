import React from 'react';
import logo from '../../image/Photos and Icons/logo.png'

const Footer = () => {
    return (
        <div style={{ marginTop: 50 }}>
            <img src={logo} width='150px' alt="" />

            <p style={{ margin: 0 }}>About Us| Contact Us| Careers |FAQ</p><br />
            <p > Terms of Use | Messaging Terms | Privacy policy</p>
            <p style={{ fontWeight: 700, fontSize: 13, paddingBottom: 60 }}>	&copy; COPYRIGHT 2022| ALL RIGHT RESERVED</p>
        </div >
    );
};

export default Footer;