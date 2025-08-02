
import React from 'react';
 

const Event = () => {
  const event = {
    title: 'Village Syn',
    date: 'Sunday, 31 August 2025',
    platform: 'Microsoft Teams',
    link: ''
  };

  return (
    <div className="event-container">
      <h1>Upcoming Tech Events</h1>
      
      <div className="event-card">
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Platform:</strong> {event.platform}</p>
        <a href={event.link} target="_blank" rel="noopener noreferrer">
          <button className="join-button">Join on Teams</button>
        </a>
      </div>
    </div>
  );
};

export default Event;
