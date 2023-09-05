import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='wrapper'>
                <div id='logoWrapper'>
                    <img id='logoImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693880283/SJ%20Race%20Timing/gyrk7mzuutrns1ntgkvx.webp'/>
                </div>
                <div id='navLinksWrapper'>
                    <Link to='/' className='navLink'>About</Link>
                    <Link to='/' className='navLink'>Services</Link>
                    <Link to='/' className='navLink'>Schedule</Link>
                    <Link to='/' className='navLink'>Results</Link>
                    <Link to='/' className='navLink'>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;