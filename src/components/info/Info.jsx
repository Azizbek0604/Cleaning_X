import React from 'react'
import './Info.scss'

import Image from '../../assets/images/InfoImg.png'

import Icon from '../../assets/images/HeroIcon.svg'


const Info = () => {
  return (
        <>
            <div className="container">
                <div className='info'>
                    <div>
                        <img src={Image} alt="Image" />
                    </div>
                    <div className='info__right_block'>
                        <p className='info__desc'>Covid-19 sanitization</p>
                        <h1 className='info__title'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                        <p className='info__text'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                        <div className="hero__item_block">

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
                </div>

            </div>
        </>
    )
}

export default Info