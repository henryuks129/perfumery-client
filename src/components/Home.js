import React from 'react';
import '../styles/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import scentedcandles from '../assets/scentedcandles.svg';
import deodorants from '../assets/deodorants.svg';
import glaciers from '../assets/glaciersperfume.svg';
import armaf from '../assets/armafperfume.svg';
import vector1 from '../assets/Vector1.svg';
import vector2 from '../assets/vector2.svg';
import vector3 from '../assets/Vector3.svg';
import vector4 from '../assets/Vector4.svg';
import ComboPackageCategory from '../Pages/ComboPackageCategory';
import MaleCategory from '../Pages/MaleCategory';
import FemaleCategory from '../Pages/FemaleCategory';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=''>
      <Navbar/>
      <div className='container mb-5'>
      <div className='row mt-2'>
        <div className='col-lg-2 bg-light'>
          <div className='text-center'>
            <h4>categories</h4><hr />
            <div>
              <p>All</p>
              <p>Male</p>
              <p>Female</p>
              <p>Combo Packages</p>
              <p>Designers Perfume</p>
              <p>Scented Candles</p>
              <p>Reeds & Diffusers</p>
              <p>Sprays</p>
            </div>
          </div>
        </div>
        <div className='col-lg-7'>
          {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
        </div>
        <div className='col-lg-3 home-image-section'>
          {/* <div className='home-image-section'> */}
            <img src={scentedcandles} alt="" className='w-100 img-fluid'/>
            <img src={deodorants} alt="" className='w-100 img-fluid'/>
            <img src={glaciers} alt="" className='w-100 img-fluid'/>
            <img src={armaf} alt="" className='w-100 img-fluid'/>
          {/* </div> */}
        </div>
      </div>
      <div className='d-flex gap-5 mt-5'>
        <div className='d-inline-flex'>
          <img src={vector1} alt="" />
          <div>
          <p>Nationwide Delivery</p>
          <p>Anywhere Anytime</p>
          </div>
        </div>
        <div className='d-flex'>
          <img src={vector2} alt="" />
          <div>
          <p>Same Day Delivery</p>
          <p>In Lagos Only</p>
          </div>
        </div>
        <div className='d-inline-flex'>
          <img src={vector3} alt="" />
          <div>
          <p>Pay On Delivery</p>
          <p>In Lagos Only</p>
          </div>
        </div>
        <div className='d-inline-flex'>
          <img src={vector4} alt="" />
          <div>
          <p>Lowest Price</p>
          <p>Best Deals</p>
          </div>
        </div>
      </div>
      <MaleCategory/>
      <FemaleCategory/>
      <ComboPackageCategory/>
    </div>
      <Footer/>
    </div>
  )
}

export default Home