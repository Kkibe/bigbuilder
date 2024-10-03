import Logo from '../../assets/logo.png';
import './Navbar.scss';

import { NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <header>
            <NavLink to="/" className='logo'>
                    <img src={Logo}/>
            </NavLink> 
            <nav>
                <NavLink to="/" title='home' >Home</NavLink>
                <NavLink to="/services" title='explore' >Builder</NavLink>
                <NavLink to="/news" title='explore' >News</NavLink>
                <NavLink to="/about" title='contact' >About</NavLink>
            </nav>
            <div className="btn-container">
                <a className="btn" href="/about#pricing">Pricing</a>
                <a className="btn" href="register">Register</a>
            </div>
        </header>
    );
}

export default Navbar;
