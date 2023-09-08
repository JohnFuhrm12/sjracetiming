import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    // Open Navbar (Slide into View)
    function MobileNavAnimation() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        if (hamburgerMenu.checked) {
            mobileNav.style.translate = '0';
            mobileNav.style.opacity = '1';
        } else {
            mobileNav.style.translate = '0 -150%';
            mobileNav.style.opacity = '0';
        }

    }

    // Close Navbar (Slide out of View)
    function closeNav() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        hamburgerMenu.checked = false;
        mobileNav.style.translate = '0 -150%';
    }

    return (
        <>
            <div className='wrapper'>
                <Link id='logoLink' to='/'>
                    <div id='logoWrapper'>
                        <img id='logoImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693880283/SJ%20Race%20Timing/gyrk7mzuutrns1ntgkvx.webp' alt='SJ Race Timing Logo'/>
                    </div>
                </Link>
                <div id='navLinksWrapper'>
                    <Link to='/about' className='navLink'>About</Link>
                    <Link to='/services' className='navLink'>Services</Link>
                    <Link to='/schedule' className='navLink'>Schedule</Link>
                    <Link to='/results' className='navLink'>Results</Link>
                    <Link to='/contact' className='navLink'>Contact</Link>
                </div>
                <label id='hamburgerMenu' onClick={MobileNavAnimation} aria-label="hamburgerMenu">
                    <input id='menuCheck' type='checkbox' aria-label="menuCheck"/>
                </label>
            </div>
            <div id='hamburgerNav'>
                <Link to='/about' className='mobileNavLink' onClick={closeNav}>About</Link>
                <Link to='/services' className='mobileNavLink' onClick={closeNav}>Services</Link>
                <Link to='/schedule' className='mobileNavLink' onClick={closeNav}>Schedule</Link>
                <Link to='/results' className='mobileNavLink' onClick={closeNav}>Results</Link>
                <Link to='/contact' className='mobileNavLink' onClick={closeNav}>Contact</Link>
            </div>
        </>
    )
}

export default Navbar;