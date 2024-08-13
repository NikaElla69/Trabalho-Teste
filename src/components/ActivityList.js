import React from 'react';
import './ActivityList.css';

function ActivityList({ activities, onSelect, onToggle, onDelete }) {
    return (
        <div>
            <h2>Lista das Atividades</h2>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                        <p>{activity.date}</p>
                        <p>{activity.priority}</p>
                        <button className='buttonDetails' onClick={() => onSelect(activity)}>Detalhes</button>
                        <button className='buttonDone' onClick={() => onToggle(activity)}>{activity.completed ? 'Marcar como não concluída' : 'Marcar como concluída'}</button>
                        <button className='buttonDelete' onClick={() => onDelete(activity)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityList;
