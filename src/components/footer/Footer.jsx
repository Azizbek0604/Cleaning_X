import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
      <>
        <div className="container">
          <div className='footer'>
            <div className='footer__1'>
              <h1 className='footer__title1'>Quality cleaning for your home</h1>
              <p className='footer__text1'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
            </div>

            <div className='footer__2'>
              <h3>Contact Us</h3>
              
              <a className='footer__2_link' href="#">1827 Nickel Road, Los Angeles, CA, 90017, United States</a>
              <a href="#">(414) 567 - 2109</a>
              <a href="#">contact@cleaning.com</a>

            </div>

            <div className='footer__3'>
              <h3>Hours</h3>
              <p>Monday to Friday <br /> 6:00 AM - 9:00 PM</p>
              <p>Saturday & Sunday <br /> 8:00 AM - 8:00 PM</p>
            </div>

            <div className='footer__4'>
              <h3>Get a free estimate</h3>
              <p className='footer__4_desc'>(414) 567 - 2109</p>
              <p className='footer__4_text'>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
              <button className='footer__btn'>Request a free quote</button>
            </div>

          </div>


        </div>
      
      </>
  );
};

export default Footer;
