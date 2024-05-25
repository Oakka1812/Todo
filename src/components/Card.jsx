/* eslint-disable no-restricted-globals */
import React from "react";

const Card = ({ todos, deleteTodos, updateTodos }) => {
  //show confirmation alert
  const handleDeleteTodos = (id) => {
    if (confirm("Are you sure?")) {
      deleteTodos(id);
    }
  };
  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={
            todo.complete
              ? "list-group-item w-100 mt-3 shadow-sm bg-success text-decoration-line-through"
              : "list-group-item w-100 mt-3 shadow-sm"
          }// conditional styling
        >
          <div className="row">
            <div className="col-10">
              <input
                type="checkbox"
                className="me-2"
                onClick={() => updateTodos(todo.id, !todo.complete)} //passing opposite of complete status
                checked={todo.complete} //todo status ture = checked
              />
              {todo.task}
            </div>
            <div className="col-2">
              <i
                onClick={() => handleDeleteTodos(todo.id)}//passing id to delete function
                className="fa-solid fa-xmark text-danger"
              ></i>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Card;
