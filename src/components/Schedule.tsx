import '../styles/schedule.css';

function Schedule() {
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

    return (
        <>
            <div id='schedulePageBackground'>
                <h1 className='title'>SCHEDULE</h1>
            </div>
            <div id='fullEventsWrapper'>
            {events.map((event) => {
                            return (
                    <>
                        <div className='eventWrapper largeEventWrapper' key={event.eventName}>
                            <div id='eventDatesWrapper'>
                                <h2 className='eventDate eventDateLarge'>{event.eventDate}</h2>
                                    <div className='eventItemDateWrapper eventItemDateWrapperLarge'>
                                        <h2 className='eventDay eventDayLarge'>{event.eventDay}</h2>
                                        <h2 className='eventMonth eventMonthLarge'>{event.eventMonth}</h2>
                                    </div>
                            </div>
                            <h2 className='eventNameLocation eventNameLocationLarge'>{event.eventName}<span className='slash'> / </span><span className='eventLocation eventLocationLarge'>{event.eventLocation}</span></h2>                                                                             
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