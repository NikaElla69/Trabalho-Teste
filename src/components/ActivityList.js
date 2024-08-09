import React from 'react';

function ActivityList({ activities, onSelect, onToggle, onDelete }) {
    return (
        <div>
            <h2>Activity List</h2>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                        <p>{activity.date}</p>
                        <p>{activity.priority}</p>
                        <button onClick={() => onSelect(activity)}>Details</button>
                        <button onClick={() => onToggle(activity)}>{activity.completed ? 'Mark as Not Done' : 'Mark as Done'}</button>
                        <button onClick={() => onDelete(activity)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityList;
