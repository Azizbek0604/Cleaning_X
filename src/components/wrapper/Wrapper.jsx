import React from 'react'
import './Wrapper.scss'

import Image from '../../assets/images/Wimg1.svg'

import Image2 from '../../assets/images/Wimg2.svg'

import Image3 from '../../assets/images/Wimg3.svg'

const Wrapper = () => {
  return (
        <>
            <div className="container">
                <h1 className='wrapper__title'>About Us</h1>
                <p className='wrapper__text'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>

                <div className='wrapper'>
                    <div className='wrapper__block'>
                        <img className='wrapper__item_img' src={Image} alt="image" />
                        <h2 className='wrapper__item_title'>1. Schedule online</h2>
                        <p className='wrapper__item_text'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                    </div>

                    <div className='wrapper__block'>
                        <img className='wrapper__item_img' src={Image2} alt="image" />
                        <h2 className='wrapper__item_title'>1. Schedule online</h2>
                        <p className='wrapper__item_text'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                    </div>

                    <div className='wrapper__block'>
                        <img className='wrapper__item_img' src={Image3} alt="image" />
                        <h2 className='wrapper__item_title'>1. Schedule online</h2>
                        <p className='wrapper__item_text'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                    </div>


                </div>
                    <div className='wrapper__btn_block'>
                            <button className='wrapper__btn'>Get a free quote</button>
                            <button className='wrapper__btnn'>Explore services</button>
                    </div>


            </div>
        </>
    )
}

export default Wrapper