// task_1/dashboard/src/Notifications.js
import React from 'react';
import './Notifications.css';
import closeIcon from './dashboard/close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ float: 'right' }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>{getLatestNotification()}</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent" style={{ color: 'red' }}>
          New resume available
        </li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
