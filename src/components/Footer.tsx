import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div id='footerWrapper'>
                <div id='sponsorImgWrapper'>
                    <a href='http://www.pinelandstriders.com/' target='_blank'>
                        <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891296/SJ%20Race%20Timing/lm9mg9nllahm0ecuctlz.jpg' className='sponsorImg' alt='Pineland Striders'/>
                    </a>
                    <a href='https://chronotrack.com/' target='_blank'>
                        <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891297/SJ%20Race%20Timing/unaejbz9ggqv90fnk4ig.png' className='sponsorImg' alt='Chrono Track'/>
                    </a>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693880283/SJ%20Race%20Timing/gyrk7mzuutrns1ntgkvx.webp' className='sponsorImg' alt='South Jersey Race Timing'/>
                    <a href='https://runsignup.com/' target='_blank'>
                        <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891297/SJ%20Race%20Timing/hmydnvu0dbf8k1jgdvdn.webp' className='sponsorImg' alt='Run SignUp'/>
                    </a>
                    <a href='https://www.secondcapitalrunning.com/' target='_blank'>
                        <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891300/SJ%20Race%20Timing/tdluswydzb7gn7k7iihd.webp' className='sponsorImg' alt='Second Capital Running'/>
                    </a>
                    <a href='http://www.medfordnjmilers.com/' target='_blank'>
                        <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891301/SJ%20Race%20Timing/kndzr2lvtzlnuh0ninac.webp' className='sponsorImg' alt='Medford NJ Milers'/>
                    </a>
                </div>
                <div id='footerLinksSmallWrapper'>
                    <Link to='/terms' className='footerLinkSmall'>Terms and Conditions</Link>
                    <Link to='/privacy' className='footerLinkSmall'>Privacy Policy</Link>
                    <a href='https://sierranevadawebdesigns.com/' className='footerLinkSmall'>Design</a>
                </div>
                <div id='footerLinksSmallWrapper'>
                    <p className='footerLinkSmall'>609-206-7555</p>
                    <p className='footerLinkSmall'>runner1311@verizon.net</p>
                </div>
                <p id='copyright'>Copyright © 2023 | South Jersey Race Timing LLC | All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer;