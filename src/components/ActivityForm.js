import React, { useState } from 'react';

function ActivityForm({ onSave, activity }) {
    const [title, setTitle] = useState(activity?.title || '');
    const [description, setDescription] = useState(activity?.description || '');
    const [date, setDate] = useState(activity?.date || '');
    const [priority, setPriority] = useState(activity?.priority || 'Normal');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, description, date, priority });
        setTitle('');
        setDescription('');
        setDate('');
        setPriority('Normal');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título da Atividade:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Descrição:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Data:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Prioridade:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Baixo">Baixo</option>
                    <option value="Normal">Normal</option>
                    <option value="Alto">Alto</option>
                </select>
            </div>
            <button className='button' type="submit">Salvar Atividade</button>
        </form>
    );
}

export default ActivityForm;
