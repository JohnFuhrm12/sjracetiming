import '../styles/home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from "react-router-dom";

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
            eventName: 'Katz JCC Kids Traithlon',
            eventLocation: 'Cherry Hill',
            eventDate: '10',
            eventDay: 'Sun',
            eventMonth: 'Sep',
            dateTime: new Date('2017-12-23'),
            eventLink: 'https://runsignup.com/Race/NJ/CherryHill/KatzJCCKidsTri'
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
    ];

    // Database Explanation: Events Hold All Seperated Date Information for Display and Regular Date to OrderBy next upcoming Race First
    // Results will grab Name for Display and The Link to Results Page and Date, Orderby Most recents Result First

    const [dynamicBackgroundImage, setDynamicBackgroundImage] = useState('url(https://res.cloudinary.com/dvmw658s9/image/upload/v1694019957/SJ%20Race%20Timing/e00x6odujttar6bxntsm.jpg)');
    const [counter, setCounter] = useState(0);

    const backgroundImages = ['url(https://res.cloudinary.com/dvmw658s9/image/upload/v1693883508/SJ%20Race%20Timing/qexfakhgqxaughlxoaze.jpg)', 
    'url(https://res.cloudinary.com/dvmw658s9/image/upload/v1694020064/SJ%20Race%20Timing/av8msxn695ipcbzmmod9.jpg)',
     'url(https://res.cloudinary.com/dvmw658s9/image/upload/v1694019957/SJ%20Race%20Timing/e00x6odujttar6bxntsm.jpg)'];

    // Constantly Loop Through Background Images
    useEffect(() => {
        const intervalID = setInterval(() =>  {
            if (counter < 2) {
                setDynamicBackgroundImage(backgroundImages[counter]);
                setCounter(counter + 1);
            } else if (counter === 2) {
                setDynamicBackgroundImage(backgroundImages[counter]);
                setCounter(0);
            }
        }, 3500);
    
        return () => clearInterval(intervalID);
    }), [];

    // Contact Validation FormSpree
    const [state, handleSubmit] = useForm("mjvqrlnb");
    const navigate = useNavigate();

    if (state.succeeded) {
        navigate('/success');
    }; 

    return (
        <>
            <div id='homePageBackground' style={{backgroundImage: dynamicBackgroundImage}}>
                <div id='buttonWrapper'>
                    <Link to='/schedule'>
                        <button className='button topHome'>FIND A RACE</button>
                    </Link>
                    <Link to='/results'>
                        <button className='button topHome'>SEE RESULTS</button>
                    </Link>
                </div>
                <div id='socialIconsWrapperHomePage'>
                    <a href="https://www.facebook.com/SouthJerseyRaceTimingLlc/" target='_blank' aria-label="Facebook" className="fa fa-facebook"></a>
                    <a href="https://www.youtube.com/@southjerseyracetiming3314/featured" target='_blank' aria-label="YouTube" className="fa fa-youtube"></a>
                </div>
            </div>
            <div className='infoBlock fade'>
                <h1 id='title'><span id='pinkTitle'>ABOUT</span> SOUTH JERSEY RACE TIMING</h1>
                <p className='infoParagraph italicsStyle'>At South Jersey Race Timing, we believe that your success is job number one. For over 25 years we have worked and participated in the industry as race directors, race timers, and race participants. As avid runners, we know how accurate timing and organization are so important to a race for both participants and directors.</p>
                <p className='infoParagraph italicsStyle'>We offer full service packages from start to finish with advice on our own experience, race set up and application, race timing, race results, and even video/media of every event.</p>
                <p className='infoParagraph italicsStyle'>We take pride in our work and look forward to speaking with you. Take a look at our services or simply contact us today.</p>
            </div>
            <div className='infoBlockBlue'>
                <div className='eventsResultsWrapper'>
                    <div id='eventsBlock'>
                        <h2 className='subtitleBlue'><span className='pinkSubtitle'>UPCOMING</span> EVENTS</h2>
                        {events.map((event) => {
                            return (
                                <>
                                    <div className='eventWrapper' key={event.eventName}>
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
                        <Link to='/schedule' className='seeAllLink'>SEE FULL SCHEDULE</Link>
                    </div>
                    <div id='resultsBlock'>
                        <h2 className='subtitleBlue'><span className='pinkSubtitle'>RECENT</span> RESULTS</h2>
                        {results.map((result) => {
                            return (
                                <>
                                    <div className='resultsWrapper' key={result.resultName}>
                                        <a href={result.resultLink} target='_blank' className='resultLink'>{result.resultName}</a>
                                    </div>
                                </>
                            )
                        })}
                        <Link to='/results' className='seeAllLink'>SEE ALL RESULTS</Link>
                    </div>
                </div>
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
            <div id='contactBlockHome'>
                <div id='contactLogoFormHomeWrapper'>
                    <img id='logoContactBlock' className='fade' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693969389/SJ%20Race%20Timing/g1jzajm3pzy0uzfjyvca.webp' alt='South Jersey Race Timing'/>
                    <div id='contactFormBlockHome' className='fade'>
                        <h2 id='contactHomeTitle'>CONTACT US</h2>
                        <form id='contactFormHome' onSubmit={handleSubmit}>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            <input type='text' name='name' className='contactInputHome' placeholder='Full Name' required/>
                            <select className='contactSelectHome' name='contactType' defaultValue={'none'} aria-labelledby="contactType" required>
                                <option value='none' disabled hidden>Choose from Dropdown</option>
                                <option value="Race Director">Race Director</option>
                                <option value="Runner">Runner</option>
                                <option value="N/A">N/A</option>
                            </select>
                            <input type='text' name='email' className='contactInputHome' placeholder='youremail@gmail.com' required/>
                            <input type='text' name='phone' className='contactInputHome' placeholder='Phone Number' required/>
                            <textarea name='message' className='contactTextAreaHome' placeholder='Send us a Message!'/>
                            <button id='contactFormHomeButton' className='button' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;