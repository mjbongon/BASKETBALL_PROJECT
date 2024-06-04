import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 HOOPS101. All rights reserved.</p>
                <p>Follow us on:
                    <a href="https://www.facebook.com/nba" target="_blank" rel="noopener noreferrer"> Facebook </a>|
                    <a href="https://x.com/NBA" target="_blank" rel="noopener noreferrer"> X (Twitter) </a>|
                    <a href="https://www.instagram.com/nba/" target="_blank" rel="noopener noreferrer"> Instagram </a>|
                    <a href="https://www.youtube.com/user/NBA" target="_blank" rel="noopener noreferrer"> Youtube </a> 
                </p>
            </div>
        </footer>
    );
}

export default Footer;
