import React from 'react'
import './Card.scss'

import Image from '../../assets/images/CardImg.png'

import Image2 from '../../assets/images/CardImg2.png'

const Card = () => {
  return (
    <>
        <div className="container">
            <div className='card'>
                <div className='card__top_block'>
                    <h1 className='card__title'>Articles & resources</h1>
                    <div className='card__btn_block'>
                            <button className='wrapper__btn'>Get a free quote</button>
                            <button className='wrapper__btnn'>Explore services</button>
                    </div>
                </div>

                <div className='card__flex_block'>

                    <div className='card__block'>
                        <img src={Image} alt="image" />
                        <div className='card__box'>
                            <h2 className='card__box_title'>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                            <p className='card__box_text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <p className='card__box_desc'>Jan 28, 2022</p>
                        </div>
                    </div>
                    

                    <div className='card__block'>
                        <img src={Image2} alt="image" />
                        <div className='card__box'>
                            <h2 className='card__box_title'>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                            <p className='card__box_text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <p className='card__box_desc'>Jan 28, 2022</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </>
  )
}

export default Card