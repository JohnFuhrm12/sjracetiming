import '../styles/footer.css';

function Footer() {
    return (
        <>
            <div id='footerWrapper'>
                <div id='sponsorImgWrapper'>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891296/SJ%20Race%20Timing/lm9mg9nllahm0ecuctlz.jpg' className='sponsorImg' alt='Pineland Striders'/>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891297/SJ%20Race%20Timing/unaejbz9ggqv90fnk4ig.png' className='sponsorImg' alt='Pineland Striders'/>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693880283/SJ%20Race%20Timing/gyrk7mzuutrns1ntgkvx.webp' className='sponsorImg' alt='Pineland Striders'/>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891297/SJ%20Race%20Timing/hmydnvu0dbf8k1jgdvdn.webp' className='sponsorImg' alt='Pineland Striders'/>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891300/SJ%20Race%20Timing/tdluswydzb7gn7k7iihd.webp' className='sponsorImg' alt='Pineland Striders'/>
                    <img src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693891301/SJ%20Race%20Timing/kndzr2lvtzlnuh0ninac.webp' className='sponsorImg' alt='Pineland Striders'/>
                </div>
                <div id='footerLinksSmallWrapper'>
                    <a className='footerLinkSmall'>Terms and Conditions</a>
                    <a className='footerLinkSmall'>Privacy Policy</a>
                </div>
                <p id='copyright'>'Copyright © 2023 | South Jersey Race Timing LLC | All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer;