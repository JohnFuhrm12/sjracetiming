import '../styles/admin.css';
import { useEffect, useState } from 'react';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { doc, setDoc } from "firebase/firestore/lite"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAisxb90KdddmYBJPeieRFoKMMnDMNyY3s",
  authDomain: "sj-race-timing.firebaseapp.com",
  projectId: "sj-race-timing",
  storageBucket: "sj-race-timing.appspot.com",
  messagingSenderId: "821127727275",
  appId: "1:821127727275:web:06bb89840cbf726db60fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Admin() {
    const [events, setEvents] = useState([]);
    const [results, setResults] = useState([]);

    async function getEvents(db:any) {
        const eventsCol = collection(db, 'events');
        const eventsSnapshot = await getDocs(eventsCol);
        const events = eventsSnapshot.docs.map(doc => doc.data());
        setEvents(events);
    };

    async function getResults(db:any) {
        const resultsCol = collection(db, 'results');
        const resultsSnapshot = await getDocs(resultsCol);
        const results = resultsSnapshot.docs.map(doc => doc.data());
        setResults(results);
    };

    useEffect(() => {
        getEvents(db);
        getResults(db);
    }, []);

    // Event State
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventMonth, setEventMonth] = useState('');
    const [eventWeekday, setEventWeekday] = useState('');
    const [eventDay, setEventDay] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [eventLink, setEventLink] = useState('');

    // Add a new Event
    const addEvent = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "events", `${eventName} - ${dateTime}`), {
            eventName: eventName,
            eventLocation: eventLocation,
            eventMonth: eventMonth,
            eventWeekday: eventWeekday,
            eventDay: eventDay,
            dateTime: dateTime,
            eventLink: eventLink
          });
          clearState();
    };

    // Result State
    const [resultName, setResultName] = useState('');
    const [resultYear, setResultYear] = useState('');
    const [resultMonth, setResultMonth] = useState('');
    const [resultLink, setResultLink] = useState('');
    const [resultVideoLink, setResultVideoLink] = useState('');

    // Add a new Result
    const addResult = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "results", `${resultName} - ${resultYear}`), {
            resultName: resultName,
            resultYear: resultYear,
            resultMonth: resultMonth,
            resultLink: resultLink,
            resultVideoLink: resultVideoLink
          });
          clearState();
    };

    function clearState() {
        location.reload();
    };


    return (
        <>
            <h1 id='adminTitle'>Welcome Back</h1>
            <h2 className='adminSubtitle'>Add A New Event</h2>
            <form className='adminForm' onSubmit={addEvent}>
                <label htmlFor='eventName'>Event Name:</label>
                <input name='eventName' placeholder='Event Name' onChange={(e) => {setEventName(e.target.value)}} value={eventName} required/>
                <label htmlFor='eventLocation'>Event Location:</label>
                <input name='eventLocation' placeholder='Event Location' onChange={(e) => {setEventLocation(e.target.value)}} value={eventLocation} required/>
                <label htmlFor='eventMonth'>Event Month:</label>
                <input name='eventMonth' placeholder='Ex: January' onChange={(e) => {setEventMonth(e.target.value)}} value={eventMonth} required/>
                <label htmlFor='eventWeekday'>Event Weekday:</label>
                <input name='eventWeekday' placeholder='Ex: Monday' onChange={(e) => {setEventWeekday(e.target.value)}} value={eventWeekday} required/>
                <label htmlFor='eventDay'>Event Day (Date):</label>
                <input name='eventDay' placeholder='Ex: 12' onChange={(e) => {setEventDay(e.target.value)}} value={eventDay} required/>
                <label htmlFor='dateTime'>Event Datetime (Year-Month-Day):</label>
                <input name='dateTime' placeholder='Ex: 2017-12-23' onChange={(e) => {setDateTime(e.target.value)}} value={dateTime} required/>
                <label htmlFor='eventLink'>Event Link (URL):</label>
                <input name='eventLink' placeholder='Ex: http://runsignup.com/Race' onChange={(e) => {setEventLink(e.target.value)}} value={eventLink} required/>
                <button className='button'>Add Event</button>
            </form>
            <h2 className='adminSubtitle'>Add A New Result</h2>
            <form className='adminForm' onSubmit={addResult}>
                <label htmlFor='resultName'>Result Name:</label>
                <input name='resultName' placeholder='Result Name' onChange={(e) => {setResultName(e.target.value)}} value={resultName} required/>
                <label htmlFor='resultYear'>Result Year:</label>
                <input name='resultYear' placeholder='Ex: 2023' onChange={(e) => {setResultYear(e.target.value)}} value={resultYear} required/>
                <label htmlFor='resultMonth'>Result Month:</label>
                <input name='resultMonth' placeholder='Ex: January' onChange={(e) => {setResultMonth(e.target.value)}} value={resultMonth} required/>
                <label htmlFor='resultLink'>Result Link (URL):</label>
                <input name='resultLink' placeholder='Ex: https://runsignup.com/Race/Results' onChange={(e) => {setResultLink(e.target.value)}} value={resultLink} required/>
                <label htmlFor='resultVideoLink'>Result Video Link (URL):</label>
                <input name='resultVideoLink' placeholder='Ex: https://www.youtube.com/watch?' onChange={(e) => {setResultVideoLink(e.target.value)}} value={resultVideoLink} required/>
                <button className='button'>Add Result</button>
            </form>
            <div id='testEventsDELETE'>
                <h2>All EVENTS</h2>
                {events.map((event:any) => {
                    return (
                        <>
                            <div className='testKey' key={event}>
                                <a href={event.eventLink}>{event.eventName}</a>
                            </div>
                        </>
                    )
                })}
            </div>
            <div id='testResultsDELETE'>
                <h2>All RESULTS</h2>
                {results.map((result:any) => {
                    return (
                        <>
                            <div className='testKey' key={result}>
                                <h2>{result.resultName}</h2>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
};

export default Admin;