import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/logotext.svg';
import MenuButtonIcon from '../../assets/menubutton.svg';
import CloseMenuButton from '../../assets/closemenubutton.svg';
import './style.less';

const NavBar: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);
  const toggleMenu = (): void => {
    const menuIcon = document.getElementsByClassName('menuicon')[0] as HTMLImageElement;
    const mobileLinks = document.getElementsByClassName('mobile-links')[0] as HTMLImageElement;
    if (menuState) {
      menuIcon.src = MenuButtonIcon;
      mobileLinks.style.display = 'none';
      setMenuState(false);
    } else {
      menuIcon.src = CloseMenuButton;
      mobileLinks.style.display = 'block';
      setMenuState(true);
    }
  };
  const scrollToTop = (): void => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContacts = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToDescription = (): void => {
    document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTeam = (): void => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="fixed-nav">
      <div className="navbar-div">
        <ul className="navbar">
          <li>
            <Link to="/" onClick={scrollToTop}>
              <img src={Logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link to="#contact" onClick={scrollToContacts}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#team" onClick={scrollToTeam}>Team</Link>
          </li>
          <li>
            <Link to="#description" onClick={scrollToDescription}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button className="icon" onClick={toggleMenu} type="button">
            <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
          </button>
        </div>
      </div>
      <div className="wainbow" />
      <div className="mobile-links">
        <Link to="#description"
          onClick={(): void => {
            toggleMenu();
            scrollToDescription();
          }}
        >
          About Us
        </Link>
        <Link to="#team"
          onClick={(): void => {
            toggleMenu();
            scrollToTeam();
          }}
        >
          Team
        </Link>
        <Link
          to="#contact"
          onClick={(): void => {
            toggleMenu();
            scrollToContacts();
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
