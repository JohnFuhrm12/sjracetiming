import '../styles/schedule.css';
import { useEffect, useState } from 'react';

// Firebase Imports
import { collection, getDocs } from 'firebase/firestore/lite';

function Schedule( {...props} ) {
    const [events, setEvents] = useState([]);

    async function getEvents(db:any) {
        const eventsCol = collection(db, 'events');
        const eventsSnapshot = await getDocs(eventsCol);
        const events = eventsSnapshot.docs.map(doc => doc.data());
        setEvents(events);
    };

    useEffect(() => {
        getEvents(props.db);
    }, []);

    return (
        <>
            <div id='schedulePageBackground'>
                <h1 className='title'>SCHEDULE</h1>
            </div>
            <div id='fullEventsWrapper'>
            {events.map((event:any) => {
                            return (
                    <>
                        <div className='largeEventWrapper fade' key={event.eventName}>
                            <div id='eventDatesWrapper'>
                                <h2 className='eventDateLarge'>{event.eventDay}</h2>
                                    <div className='eventItemDateWrapperLarge'>
                                        <h2 className='eventDayLarge'>{event.eventWeekday}</h2>
                                        <h2 className='eventMonthLarge'>{event.eventMonth}</h2>
                                    </div>
                            </div>
                            <h2 className='eventNameLocationLarge'>{event.eventName}<span className='slash'> / </span><span className='eventLocationLarge'>{event.eventLocation}</span></h2>                                                                             
                            <button className='button'><a href={event.eventLink} target='_blank'>Register</a></button>
                        </div>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default Schedule;