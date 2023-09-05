import '../styles/home.css';

function Home() {
    return (
        <>
            <div id='homePageBackground'>
            <div id='buttonWrapper'>
                <button className='button'>Find a Race</button>
                <button className='button'>See Results</button>
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
        </>
    )
}

export default Home;