import { Link } from 'react-router-dom';
import logo from '../assets/SpaceX-Logo.png';

function Header() {
    return (
        <div className='header'>
            <Link to={'/'}>
                <img src={logo} />
            </Link>
        </div>
    )
}

export default Header;