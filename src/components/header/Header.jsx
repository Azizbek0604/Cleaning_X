import './Header.scss';

import Logo from '../../assets/images/Logo.svg'

const Header = () => {
  return (
    <>
    <div className="container">

      {/* <div className='overlay'></div>
      <div className='box'>
      <a className='mobile__modal_link' href="#">Home</a>
      <a className='mobile__modal_link' href="#">About</a>
      <a className='mobile__modal_link' href="#">Services</a>
      <a className='mobile__modal_link' href="#">Articles</a>
      <a className='mobile__modal_link' href="#">Contact</a>
      </div> */}


      <div className='header'>
        <div className='header__left_block'>
          <img src={Logo} alt="Logo" />
            <ul className='header__list'>
              <li className='header__item'><a className='header__item_link' href="#">Home</a></li>
              <li className='header__item'><a className='header__item_link' href="#">About</a></li>
              <li className='header__item'><a className='header__item_link' href="#">Services</a></li>
              <li className='header__item'><a className='header__item_link' href="#">Articles</a></li>
              <li className='header__item'><a className='header__item_link' href="#">Contact</a></li>
            </ul>
        </div>
        <div className='header__right_block'>
            <a className='header__right_link' href="#">Cart (0)</a>
            <button className='header__right_btn'>Get a free quote</button>
        </div>

        {/* <div className='header__burger'>
            <span className='header__burger_item'></span>
            <span className='header__burger_item'></span>
            <span className='header__burger_item'></span>
        </div>         */}

      </div>

    </div>
    
    </>
  );
};

export default Header;
