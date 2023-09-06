import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    function MobileNavAnimation() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        if (hamburgerMenu.checked) {
            mobileNav.style.translate = '0';
        } else {
            mobileNav.style.translate = '-100%';
        }

    }

    function closeNav() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        hamburgerMenu.checked = false;
        mobileNav.style.translate = '-100%';
    }

    return (
        <>
            <div className='wrapper'>
                    <div id='logoWrapper'>
                        <img id='logoImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693880283/SJ%20Race%20Timing/gyrk7mzuutrns1ntgkvx.webp' alt='SJ Race Timing Logo'/>
                    </div>
                <div id='navLinksWrapper'>
                    <Link to='/' className='navLink'>About</Link>
                    <Link to='/' className='navLink'>Services</Link>
                    <Link to='/schedule' className='navLink'>Schedule</Link>
                    <Link to='/' className='navLink'>Results</Link>
                    <Link to='/' className='navLink'>Contact</Link>
                </div>
                <label id='hamburgerMenu' onClick={MobileNavAnimation}>
                    <input id='menuCheck' type='checkbox'/>
                </label>
            </div>
            <div id='hamburgerNav'>
                <Link to='/' className='mobileNavLink' onClick={closeNav}>Link1</Link>
                <Link to='/' className='mobileNavLink' onClick={closeNav}>Link2</Link>
            </div>
        </>
    )
}

export default Navbar;