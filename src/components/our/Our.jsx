import React from 'react'
import './Our.scss'

import Image from '../../assets/images/OurImg.svg'

import Image2 from '../../assets/images/OurImg2.svg'

import Image3 from '../../assets/images/OurImg3.svg'

const Our = () => {
  return (
    <>
        <div className="container">
            <div className='our'>
                <div className='our__top_block'>
                <h1 className='our__title'>Our Services</h1>
                <button className='our__btn'>Explore services</button>
                </div>

                <div className='our__block'>
                    <div className='our__item_block'>
                        <img className='our__item_img' src={Image} alt="image" />
                        <h2 className='our__item_title'>House cleaning</h2>
                        <p className='our__item_text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>

                    <div className='our__item_block'>
                        <img className='our__item_imgg' src={Image2} alt="image" />
                        <h2 className='our__item_title'>House cleaning</h2>
                        <p className='our__item_text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>

                    <div className='our__item_block'>
                        <img className='our__item_img' src={Image3} alt="image" />
                        <h2 className='our__item_title'>House cleaning</h2>
                        <p className='our__item_text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  ) 
}

export default Our