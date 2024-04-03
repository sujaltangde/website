import React from 'react';
import ".././styles/Event.css"

const events = [
  {
    title: 'Introduction to DevOps',
    speaker: 'Vedant Kakde',
    date: 'February 12, 2024 • 18:00 IST',
    image: '/assets/event1.svg'
  },
  {
    title: 'Introduction to DevOps',
    speaker: 'Vedant Kakde',
    date: 'February 12, 2024 • 18:00 IST',
    image: '/assets/event1.svg'
  },
  {
    title: 'Introduction to DevOps',
    speaker: 'Vedant Kakde',
    date: 'February 12, 2024 • 18:00 IST',
    image: '/assets/event1.svg'
  },
  {
    title: 'Introduction to DevOps',
    speaker: 'Vedant Kakde',
    date: 'February 12, 2024 • 18:00 IST',
    image: '/assets/event1.svg'
  },
  {
    title: 'Introduction to DevOps',
    speaker: 'Vedant Kakde',
    date: 'February 12, 2024 • 18:00 IST',
    image: '/assets/event1.svg'
  },
];

const Event = React.memo(() => {
    return (
        <div className='min-h-screen bg-gray-900 pt-20'>
            <h1 className="event-heading-component">Event Calendar</h1>
            <h2 className="event-sub-heading-component">Upcoming Events</h2>
            <div className="event-container-all">
                <img src="/assets/event1.svg" alt="not" />
                <div className="event-component-text">
                    <h1 className='event-head'>A Walkthrough of DevOps using Google Cloud</h1>
                    <p className='name-event'>Nilay Jain</p>
                    <p className='date-event'>February 12, 2024 • 18:00 IST</p>
                    <button className="event-btn">Register</button>
                </div>
            </div>
            <div className="upcoming-event">
                <div className="events-component-text">
                    <h1 className='event-head'>Introduction to DevOps</h1>
                    <p style={{ marginTop: '0.1rem' }} className='name-event'>Vedant Kakde</p>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem' }} className='date-event'>February 12, 2024 • 18:00 IST</p>
                    <div className='combine-btn-speak'>
                        <button style={{ marginTop: '2rem' }} className="event-btn">Register</button>
                        <img src="/assets/event1.svg" alt="" />
                    </div>
                </div>
                <div className="events-component-text">
                    <h1 className='event-head'>Introduction to DevOps</h1>
                    <p style={{ marginTop: '0.1rem' }} className='name-event'>Vedant Kakde</p>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem' }} className='date-event'>February 12, 2024 • 18:00 IST</p>
                    <div className='combine-btn-speak'>
                        <button style={{ marginTop: '2rem' }} className="event-btn">Register</button>
                        <img src="/assets/event1.svg" alt="" />
                    </div>
                </div>
                <div className="events-component-text">
                    <h1 className='event-head'>Introduction to DevOps</h1>
                    <p style={{ marginTop: '0.1rem' }} className='name-event'>Vedant Kakde</p>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem' }} className='date-event'>February 12, 2024 • 18:00 IST</p>
                    <div className='combine-btn-speak'>
                        <button style={{ marginTop: '2rem' }} className="event-btn">Register</button>
                        <img src="/assets/event1.svg" alt="" />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '5rem' }} className="wrapper-past-event">
                <h2 className="event-sub-heading-component">Past Events</h2>
                <div className="upcoming-event">
                    {events.map((event, index) => (
                        <div key={index} className="events-component-text">
                            <h1 className='event-head'>{event.title}</h1>
                            <p style={{ marginTop: '0.1rem' }} className='name-event'>{event.speaker}</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.8rem' }} className='date-event'>{event.date}</p>
                            <div className='combine-btn-speak'>
                                <button style={{ marginTop: '2rem' }} className="event-btn">Register</button>
                                <img src={event.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

Event.displayName = 'Event';

export default Event;
