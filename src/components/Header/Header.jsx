import './header.css';
import Logo from '../../data/logo_white_background.jpg';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return <header className="header_container">
    <NavLink to='/' className="link_main_page"><img src={Logo} className='logo' alt='logo' /></NavLink>
  </header>
}