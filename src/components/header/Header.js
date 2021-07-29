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
import ArrowIcon from '../../images/arrow-right.png';

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
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="mercury" src={MercuryIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_mercury'} exact to="/" onClick={onNavClick}>Mercury</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="venus" src={VenusIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_venus'} to="/venus" onClick={onNavClick}>Venus</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="earth" src={EarthIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_earth'} to="/earth" onClick={onNavClick}>Earth</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="mars" src={MarsIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_mars'} to="/mars" onClick={onNavClick}>Mars</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="jupiter" src={JupiterIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_jupiter'} to="/jupiter" onClick={onNavClick}>Jupiter</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src="./assets/arrow-right.png" />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="saturn" src={SaturnIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_saturn'} to="/saturn" onClick={onNavClick}>Saturn</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="uranus" src={UranusIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_uranus'} to="/uranus" onClick={onNavClick}>Uranus</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <li className="header__list">
          <div className="header__menu-info-group">
            <img className="header__planet-icon" alt="neptune" src={NeptuneIcon} />
            <NavLink className="header__link" activeClassName={!mobileWidth && 'header__link_active_neptune'} to="/neptune" onClick={onNavClick}>Neptune</NavLink>
          </div>
          <img className="header__arrow-icon" alt="" src={ArrowIcon} />
        </li>
        <div className={`black-background ${isMenuOpen && 'black-background_active'}`}></div>
      </ul>
    </header>
  )
}

export default Header;