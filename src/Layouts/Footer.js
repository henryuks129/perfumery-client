import React from 'react';
import '../styles/Footer.css';
import footerlogo from '../assets/footerlogo.svg';
import emailicon from '../assets/emailicon.svg';
import facebookicon from '../assets/facebookicon.svg';
import instagramicon from '../assets/instagramicon.svg';
import promotionimage from '../assets/promotionimage.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer-body'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-between text-white pt-5 border-bottom '>
          <div className='w-25'>
            <img src={footerlogo} className='w-50 img-fluid' alt="" />
            <p className='w-75'>
            Lörem ipsum mas min. 
            Dol teled fast påskapet bes dologi gidev. 
            Plaling povis för att övavis om yhyde, anas. Du kan vara drabbad. 
            </p>
            <div className='d-flex gap-4'>
              <img src={emailicon} alt="" />
              <img src={facebookicon} alt="" />
              <img src={instagramicon} alt="" />
            </div>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li>Male Fragrances</li>
              <li>Female Fragrances</li>
              <li>Designer Perfumes</li>
              <li>Combo Packages</li>
              <li>Reeds/Diffusers</li>
              <li>Scented Candles</li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Shop</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className='text-center'>
            <h4>Promotions</h4>
            <img src={promotionimage} alt="" />
          </div>
        </div>
          <div className='text-center'>
            <p>Copyright &copy; {year} <span>Fame Perfumery</span>. All Rights Reserved.</p>
          </div>
      </div>
    </div>
  )
}

export default Footer