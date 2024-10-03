import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
const Footer = () => {
    return (
        <div className='footer theme'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <a href='https://www.facebook.com/kibetkorirc' title='facebook' target='_blank'><Facebook /></a>
                    <a href='https://www.instagram.com/ancientpupy' title='instagram' target='_blank'><Instagram /></a>
                    <a href='https://twitter.com/ancientpupy' title='twitter' target='_blank'><Twitter /></a>
                    <a href='https://www.youtube.com/@codespear' title='youtube' target='_blank'><YouTube /></a>
                    <a href='https://www.linkedin.com/in/kibetkorir' title='linkedin' target='_blank'><LinkedIn /></a>
                </div >
                
            </div>

            <div className='section-wrapper theme'>
                <section>
                    <h2>What's New</h2>
                    <div className='items-container theme'>
                        <a href='/contact' title='help'>Video Editor</a>
                        <a href='#' title='help'>Canvas Drawer</a>
                        <a href='#' title='services'>Photo Editor</a>
                        <a href='#' title='store'>CV & Resume Builder</a>
                        <a href='#' title='store'>Logo Maker</a>
                    </div>
                </section>
                
                <section>
                    <h2>Company</h2>
                    <div className='items-container theme'>
                        <a href='#' title='help'>Our Team</a>
                        <a href='#' title='services'>Careers</a>
                        <a href='#' title='store'>About Bigbuilder</a>
                        <a href='#' title='store'>Our News</a>
                        <a href='#' title='store'>Contact Us</a>
                    </div>
                </section>
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; Bigbuilder {new Date().getFullYear()}</p>
                <a title='privacy'>Privacy policy</a>
                <a title='terms'>Terms of use</a>
                <a title='help'>FAQ</a>
            </div>
        </div>
    );
}

export default Footer;
