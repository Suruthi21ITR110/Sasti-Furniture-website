import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer-conntainer">
            <div className="footer-content">
                <div className="column">
                    <h3 style={{ color: '#000000', textDecoration: 'underline', fontSize: '20px' }}>CONTACT DETAILS</h3>
                    <ul>
                        <li className="home-link"><h3>ADDRESS:</h3>52/3,V.M.C Complex,AMC Road,Dindigul</li>
                        <li className="home-link"><h3>PHONE: </h3>+91 9988776655</li>
                        <li className="home-link"><h3>WORKING HOURS: </h3>Mon-Sat : 9.00AM to 9.00PM SUN:9.00AM to 12.00PM</li>
                    </ul>
                </div>
                <div className="column">
                    <h3 style={{ color: '#000000', textDecoration: 'underline', fontSize: '20px' }}>SERVICES</h3>
                    <ul>
                        <li><Link to="/" className="home-link">Home</Link></li>
                        <li><Link to="/aboutUs" className="home-link">About</Link></li>
                        <li><Link to="/login?returnUrl=/profile" className="home-link">Products</Link></li>
                    </ul>
                </div>
                <div className="column">
                    <h3 style={{ color: '#000000', textDecoration: 'underline', fontSize: '20px' }}>ACCOUNT</h3>
                    <ul>
                        <li><Link to="/profile" className="home-link">Profile</Link></li>
                        <li><Link to="/cart" className="home-link">Cart</Link></li>
                        <li><Link to="/about" className="home-link">Help</Link></li>
                    </ul>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <p className="text-center text-md-start">&copy;RUNSPORT All Rights Reserved</p>
                    </div>
                </div>
                {/* <div className="footer-content"> */}
            </div>
            {/* </div> */}
        </footer>
    );
};

export default Footer;
