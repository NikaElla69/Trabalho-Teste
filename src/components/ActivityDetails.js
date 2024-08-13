import React from 'react';
import './ActivityList.css'

function ActivityDetails({ activity, onBack }) {
    return (
        <div>
            <h2>Detalhes da Atividade</h2>
            <p>Titulo: {activity.title}</p>
            <p>Descrição: {activity.description}</p>
            <p>Data: {activity.date}</p>
            <p>Prioridade: {activity.priority}</p>
            <p>Status: {activity.completed ? 'Completa' : 'Incompleta'}</p>
            <button className='buttonBack' onClick={onBack}>Voltar a Lista</button>
        </div>
    );
}

export default ActivityDetails;
