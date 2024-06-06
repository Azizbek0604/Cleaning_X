import React from 'react';
import './Hero.scss';

import Image from '../../assets/images/HeroImg.svg'

import Icon from '../../assets/images/HeroIcon.svg'

const Hero = () => {
  return (
    <>
      <div className="container">
          <div className='hero'>
            <div className='hero__left_block'>
              <h1 className='hero__title'>Quality cleaning for your home</h1>
              <p className='hero__text'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
              <div className='hero__item_block'>
                <button className='hero__btn'>Get a free quote</button>
                <div className='hero__second_block'>
                    <img src={Icon} alt="icon" />
                    <div>
                      <p className='hero__desc'>Call us now</p>
                      <p className='hero__descc'>(414) 567 - 2109</p>
                    </div>
                </div>
              </div>

            </div>

            <div>
              <img className='hero__img' src={Image} alt="image" />
            </div>
          </div>
          

      </div>
      
    </>
  );
};

export default Hero;
