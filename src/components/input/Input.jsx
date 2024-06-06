import React from 'react'
import './Input.scss'

import Icon from '../../assets/images/HeroIcon.svg'

const Input = () => {
  return (
    <>
                <div className="container">
            <div className='input'>
                <div className='input__left_block'>
                    <h1 className='input__title'>Contact Us</h1>
                    <p className='input__text'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                    <div className='hero__second_block'>
                    <img src={Icon} alt="icon" />
                    <div>
                      <p className='hero__desc'>Call us now</p>
                      <p className='hero__descc'>(414) 567 - 2109</p>
                    </div>
                </div>

                <h2 className='input__second_title'>Not convinced yet?</h2>
                <p className='input__desc'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                <button className='input__btn'>Browse our packages</button>
                
                </div>

                <div className='input__right_block'>
                    
                    <div className='input__box'>
                    <div>
                        <p>Full Name</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Phone Number</p>
                        <input type="number" />
                    </div>
                    </div>

                    <div className='input__box'>
                    <div>
                        <p>Address</p>
                        <input type="Address" />
                    </div>

                    <div>
                        <p>Email</p>
                        <input type="Emal" />
                    </div>
                    </div>

                    <div className='input__box'>
                    <div>
                        <p>Requested service</p>
                        <input type="text" />
                    </div>

                    <div>
                        <p>Day of service</p>
                        <input type="number" />
                    </div>
                    </div>
                    <div className='input__boxx'>
                        <p className='box__text'>Add a note</p>
                        <input className='input__text' type="text" />
                    </div>

                    <button className='input__btnn'>Submit Message</button>
                </div>

            </div>

        </div>
    </>
    )
}

export default Input