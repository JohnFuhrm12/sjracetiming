import '../styles/services.css';

function Services() {
    return (
        <>
            <div id='servicesPageBackground'>
                <h1 className='title'>SERVICES</h1>
            </div>
            <div className='infoBlock fade'>
                <h2 className='subtitle'><span className='pinkSubtitle'>OUR</span> SERVICES</h2>
                <p className='infoParagraph italicsStyle'>We provide high quality services to race directors based on our many years of experience. When working with South Jersey Race Timing, our clients receive consultation and advice in addition to our event services. We help every step of the way to ensure your event is the best it can be.</p>
                <p className='infoParagraph italicsStyle'>A big perk of working with SJRT is our email marketing. We have compiled a list of thousands of runners that are looking for races and eager to get out and compete. This adds a nice kick start to your event. We are also heavily invested in social media with a very busy Facebook page and over 200 subscribers to our YouTube Channel.</p>
                <p className='infoParagraph italicsStyle'>Our services don't stop when the race is over, we work with all of our clients with post race marketing, and we like to be included in post race meetings to measure event success</p>
            </div>
            <div className='infoBlockBlue'>
                    <div id='servicesBlocksWrapper'>
                        <div className='servicesInfoWrapper'>
                            <h2 className='subtitleBlueSmall fade'><span className='subtitleBluePinkSmall'>Registration</span> & Planning</h2>
                            <ul className='servicesListUL fade'>
                                <li className='infoParagraphBlue listItem'>Race Suggestions and Consultation</li>
                                <li className='infoParagraphBlue listItem'>Web and Print Friendly Application Process</li>
                                <li className='infoParagraphBlue listItem'>Event Listing on our Website</li>
                                <li className='infoParagraphBlue listItem'>Event to be promoted on Facebook and website</li>
                                <li className='infoParagraphBlue listItem'>Custom Bib designs with sponsor business logos</li>
                                <li className='infoParagraphBlue listItem'>Bibs and Safety Pins for All Participants, Labeled Bibs for All Pre-Registered Runners</li>
                                <li className='infoParagraphBlue listItem'>Work with Volunteers Day Of To Complete On Site Applications</li>
                            </ul>
                        </div>
                        <div className='servicesInfoWrapper'>
                            <h2 className='subtitleBlueSmall fade'><span className='subtitleBluePinkSmall'>Course</span> Set Up & Safety</h2>
                            <ul className='servicesListUL fade'>
                                <li className='infoParagraphBlue listItem'>Assist with Course Measurement and Design</li>
                                <li className='infoParagraphBlue listItem'>Provide Safety Cones, Vests, hand-held flags and Mile Markers free of charge</li>
                                <li className='infoParagraphBlue listItem'>Provide Finish Lines with Double sided  Clock and Inflatable Arch Systems Available in 15' and 20' width for Larger Events</li>
                                <li className='infoParagraphBlue listItem'>Optional Splits and Clocks On Course</li>
                                <li className='infoParagraphBlue listItem'>Optional Pace/Mile Clock for any distance</li>
                                <li className='infoParagraphBlue listItem'>Cones and arrows available free of charge for course marking</li>
                            </ul>
                        </div>
                        <div className='servicesInfoWrapper'>
                            <h2 className='subtitleBlueSmall fade'><span className='subtitleBluePinkSmall'>Timing</span> & Post Event</h2>
                            <ul className='servicesListUL fade'>
                                <li className='infoParagraphBlue listItem'>Timing and Results Generated electronically with Chronotrack and BlueBox chip systems</li>
                                <li className='infoParagraphBlue listItem'>Text results provided within seconds of finishing</li>
                                <li className='infoParagraphBlue listItem'>HD Video of Finish Line posted on You Tube</li>
                                <li className='infoParagraphBlue listItem'>Complete List of Finishers Posted At Race Location</li>
                                <li className='infoParagraphBlue listItem'>Results Posted Same Day on SJRT Site</li>
                                <li className='infoParagraphBlue listItem'>Timing Includes Age Group, Division, Sex, and Top Overall</li>
                                <li className='infoParagraphBlue listItem'>Team Competitions and Special Award Categories Included</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Services;