import React from "react";

export default function EditForm({ currentTodo, setIsEditing, onEditInputChange, onEditFormSubmit }) {
    return (
        <form onSubmit={onEditFormSubmit}>
            <h2>Edit Todo</h2>
            <textarea
                name="updateTodo"
                type="text"
                placeholder="Update todo"
                value={currentTodo.text}
                onChange={onEditInputChange}
            />
            <div>
                <button type="submit" onClick={onEditFormSubmit}>
                    Update
                </button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        </form>
    );
}
