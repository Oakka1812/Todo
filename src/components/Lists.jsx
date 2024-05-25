import React from "react";
import Card from "./Card";

const Lists = ({ todos, deleteTodos, updateTodos }) => {
  return (
    <div>
      <div>
        <ol className="list-group">
          <Card todos={todos} deleteTodos={deleteTodos} updateTodos={updateTodos}/>
        </ol>
      </div>
    </div>
  );
};

export default Lists;
