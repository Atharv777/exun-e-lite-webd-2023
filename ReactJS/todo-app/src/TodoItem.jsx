import React from "react";

export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
    return (
        <li key={todo.id}>
            <p>{todo.text}</p>
            <div>
                <button id="edit" onClick={() => onEditClick(todo)}>Edit</button>
                <button id="delete" onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </div>
        </li>
    );
}
