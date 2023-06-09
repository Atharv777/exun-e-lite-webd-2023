import React from "react";

export default function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
    return (
        <form onSubmit={onAddFormSubmit}>
            <h2>Add Todo</h2>
            <textarea
                name="todo"
                type="text"
                placeholder="Create new todo"
                value={todo}
                onChange={onAddInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
