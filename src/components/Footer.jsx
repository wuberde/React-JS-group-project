
import React from 'react';
import payment from '../img/395-3955693_paypal-payment-method-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="payment" src={payment} alt="payment" />
            <p>&copy; Copyright 2020, Not all rights are reserved</p>
        </footer>
    )
};

export default Footer;