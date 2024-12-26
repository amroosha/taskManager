import React, { useState } from 'react';
import '../css/createTaskModal.css'; // We'll define styles here

function CreateTaskModal(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault();

        const task = {
            id: 4, 
            title: title,
            description: description,
            createdAt: new Date(),
            dueDate: new Date(dueDate),
            priority: parseInt(priority),
        };

        props.onCreateTask(task);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>Create Task</h1>

                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label>Title:</label>
                        <br />
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    
                    <div>
                        <label>Description:</label>
                        <br />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    
                    <div>
                        <label>Due Date:</label>
                        <br />
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                        />
                    </div>

                    
                    <div>
                        <label>Priority:</label>
                        <br />
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            required
                        >
                            <option value="1">1 - High</option>
                            <option value="2">2 - Medium</option>
                            <option value="3">3 - Low</option>
                        </select>
                    </div>

                   
                    <div className="form-buttons">
                        <button type="submit">Create Task</button>
                        <button type="button" onClick={props.onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTaskModal;