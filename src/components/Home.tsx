import '../styles/home.css';

function Home() {
    const events = [
        {
            eventName: 'The Run To Remember 5K',
            eventLocation: 'Somerset',
            eventDate: '09',
            eventDay: 'Sat',
            eventMonth: 'Sep',
            dateTime: new Date('2019-09-09'),
            eventLink: 'https://runsignup.com/Race/NJ/SomersPoint/TheRuntoRemember5K'
        },
        {
            eventName: 'The Cherry Hill 5K',
            eventLocation: 'Cherry Hill',
            eventDate: '12',
            eventDay: 'Mon',
            eventMonth: 'Sep',
            dateTime: new Date('2017-12-23'),
            eventLink: 'https://runsignup.com/Race/NJ/SomersPoint/TheRuntoRemember5K'
        }
    ];

    const results = [
        {
            resultName: 'Book Smiles 5k',
            resultLink: 'https://runsignup.com/Race/Results/146264/?resultSetId=401291#resultSetId-401291;perpage:2000'
        },
        {
            resultName: 'SHPOA Harbor Hustle 5K',
            resultLink: 'https://runsignup.com/Race/Results/148627#resultSetId-399623;perpage:2000'
        },
        {
            resultName: 'Cedar Island 5k Swim',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000'
        }
    ]

    return (
        <>
            <div id='homePageBackground'>
                <div id='buttonWrapper'>
                    <button className='button'>Find a Race</button>
                    <button className='button'>See Results</button>
                </div>
                <div id='socialIconsWrapperHomePage'>
                    <a href="https://www.facebook.com/SouthJerseyRaceTimingLlc/" target='_blank' className="fa fa-facebook"></a>
                    <a href="https://www.youtube.com/@southjerseyracetiming3314/featured" target='_blank' className="fa fa-youtube"></a>
                </div>
            </div>
            <div className='infoBlock fade'>
                <h1 id='title'><span id='pinkTitle'>About</span> South Jersey Race Timing</h1>
                <p className='infoParagraph'>At South Jersey Race Timing, we believe that your success is job number one. For over 25 years we have worked and participated in the industry as race directors, race timers, and race participants. As avid runners, we know how accurate timing and organization are so important to a race for both participants and directors.</p>
            </div>
            <div className='infoBlock fade'>
                <p className='infoParagraph'>We offer full service packages from start to finish with advice on our own experience, race set up and application, race timing, race results, and even video/media of every event.</p>
                <p className='infoParagraph'>We take pride in our work and look forward to speaking with you. Take a look at our services or simply contact us today.</p>
            </div>
            <div className='infoBlockBlue'>
                <div className='eventsResultsWrapper'>
                    <div id='eventsBlock'>
                        <h2 className='subtitleBlue'><span className='pinkSubtitle'>Upcoming</span> Events</h2>
                        {events.map((event) => {
                            return (
                                <>
                                    <div className='eventWrapper'>
                                        <h2 className='eventDate'>{event.eventDate}</h2>
                                        <div className='eventItemDateWrapper'>
                                            <h2 className='eventDay'>{event.eventDay}</h2>
                                            <h2 className='eventMonth'>{event.eventMonth}</h2>
                                        </div>
                                        <h2 className='eventNameLocation'>{event.eventName}<span className='slash'> / </span><span className='eventLocation'>{event.eventLocation}</span></h2>
                                        <button className='button'><a href={event.eventLink} target='_blank'>Register</a></button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div id='resultsBlock'>
                        <h2 className='subtitleBlue'><span className='pinkSubtitle'>Recent</span> Results</h2>
                        {results.map((result) => {
                            return (
                                <>
                                    <div className='resultsWrapper'>
                                        <a href={result.resultLink} target='_blank' className='resultLink'>{result.resultName}</a>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='infoBlock fade'>
                <h2 className='subtitle'><span className='pinkSubtitle'>Our</span> Services</h2>
                <p className='infoParagraph'>We provide high quality services to race directors based on our many years of experience. When working with South Jersey Race Timing, our clients receive consultation and advice in addition to our event services. We help every step of the way to ensure your event is the best it can be.</p>
                <p className='infoParagraph'>A big perk of working with SJRT is our email marketing. We have compiled a list of thousands of runners that are looking for races and eager to get out and compete. This adds a nice kick start to your event. We are also heavily invested in social media with a very busy Facebook page and over 200 subscribers to our YouTube Channel.</p>
                <p className='infoParagraph'>Our services don't stop when the race is over, we work with all of our clients with post race marketing, and we like to be included in post race meetings to measure event success</p>
            </div>
            <div className='infoBlockBlue'>
                    <div id='servicesBlocksWrapper'>
                        <div className='servicesInfoWrapper'>
                            <h2 className='subtitleBlueSmall fade'>Registration & Planning</h2>
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
                            <h2 className='subtitleBlueSmall fade'>Course Set Up & Safety</h2>
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
                            <h2 className='subtitleBlueSmall fade'>Timing & Post Event</h2>
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

export default Home;