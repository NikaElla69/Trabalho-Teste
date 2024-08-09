import React from 'react';

function ActivityDetails({ activity, onBack }) {
    return (
        <div>
            <h2>Activity Details</h2>
            <p>Title: {activity.title}</p>
            <p>Description: {activity.description}</p>
            <p>Date: {activity.date}</p>
            <p>Priority: {activity.priority}</p>
            <p>Status: {activity.completed ? 'Completed' : 'Not Completed'}</p>
            <button onClick={onBack}>Back to List</button>
        </div>
    );
}

export default ActivityDetails;
