import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import MercuryIcon from '../../images/mercury/menu-mercury.png';
import VenusIcon from '../../images/venus/menu-venus.png';
import EarthIcon from '../../images/earth/menu-earth.png';
import MarsIcon from '../../images/mars/menu-mars.png';
import JupiterIcon from '../../images/jupiter/menu-jupiter.png';
import SaturnIcon from '../../images/saturn/menu-saturn.png';
import UranusIcon from '../../images/uranus/menu-uranus.png';
import NeptuneIcon from '../../images/neptune/menu-neptune.png';
import ArrowRightIcon from '../../images/arrow-right.png';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mobileWidth, setMobileWidth] = React.useState(false);

    React.useEffect(() => {
        function checkWidth() {
            const windowWidth = window.matchMedia('(max-width: 605px)');
            if (windowWidth.matches) {
                setMobileWidth(true);
            } else {
                setMobileWidth(false);
            }
        }
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    });


  function onNavClick() {
    setIsMenuOpen(!isMenuOpen);
  }

 
  return (
    <header className="header">
      <NavLink className="logo-link" exact to="/">
        <p className="logo">The Planets</p>
      </NavLink>
      <input className="header__menu-btn" type="checkbox" id="header__menu-btn" onClick={onNavClick} checked={isMenuOpen ? true : false} />
      <label className="header__menu-icon" htmlFor="header__menu-btn"><span className="navicon"></span></label>
      <ul className={`menu ${isMenuOpen ? 'menu-active' : 'menu-inactive'}`}>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_mercury'} exact to="/" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="mercury" src={MercuryIcon} />
            <p className="header__text">Mercury</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_venus'} to="/venus" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="venus" src={VenusIcon} />
            <p className="header__text">Venus</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_earth'} to="/earth" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="earth" src={EarthIcon} />
            <p className="header__text">Earth</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_mars'} to="/mars" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="mars" src={MarsIcon} />
            <p className="header__text">Mars</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_jupiter'} to="/jupiter" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="jupiter" src={JupiterIcon} />
            <p className="header__text">Jupiter</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_saturn'} to="/saturn" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="saturn" src={SaturnIcon} />
            <p className="header__text">Saturn</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_uranus'} to="/uranus" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="uranus" src={UranusIcon} />
            <p className="header__text">Uranus</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <NavLink className="header__list" activeClassName={!mobileWidth && 'header__list_active_neptune'} to="/neptune" onClick={onNavClick}>
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="neptune" src={NeptuneIcon} />
            <p className="header__text">Neptune</p>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowRightIcon} />
        </NavLink>
        <div className={`black-background ${isMenuOpen && 'black-background_active'}`} onClick={onNavClick}></div>
      </ul>
    </header>
  )
}

export default Header;