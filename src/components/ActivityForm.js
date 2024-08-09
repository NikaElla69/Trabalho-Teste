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
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit">Save Activity</button>
        </form>
    );
}

export default ActivityForm;
