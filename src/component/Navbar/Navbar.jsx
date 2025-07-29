
import { Link } from 'react-router-dom';
import logo from '../../assets/sword2.png'; 
 import { ConnectButton } from '@rainbow-me/rainbowkit';
import './Navbar.css';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="" />
        <Link to="/">OnionMint</Link>
      </div>


      <div className="navbar__links">
        <Link to="/"><i class="fa fa-home" aria-hidden="true"></i><span>Home</span></Link>
        <Link to="/gallery"><i class="fa-solid fa-image"></i> <span>Gallery</span></Link>
        <Link to="/explore"><i class="fa-solid fa-compass"></i> <span>Explore</span></Link>
      </div>

       <div className="navbar__wallet">
          {/* <ConnectWalletButton /> */}
          <ConnectButton showBalance={false} accountStatus="address"  className="navbar__connect-button"/>
        </div>
 
    </nav>
  );
};

export default Navbar;
