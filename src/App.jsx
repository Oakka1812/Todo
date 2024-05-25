import React, { useEffect, useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { api } from "./api/apiResources";
import uuid from "react-uuid";

const App = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    const res = await api.get("/todolist"); //getting todolist data from server
    setTodos(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [todos]); //everytime todos state change, active fetchdata()

  //creating new todos
  const btnHandler = async (tasks) => {
    const data = {
      id: uuid(),
      task: tasks.current.value,
      complete: false,
    };

    await api.post("todolist", data); //add todo to todolist
    tasks.current.value = "";
  };

  //delete notes
  const deleteTodos = async (todo_id) => {
    await api.delete(`todolist/${todo_id}`) //delete todo according to id
  }

  //update todo status
  const updateTodos = async (todo_id,complete) => {
    await api.patch(`todolist/${todo_id}`, {complete})
  }
  return (
    <>
      <div className="mx-auto w-50 mt-5">
        <div className="w-75 mx-auto">
          <h2 className="mb-3">Todo List</h2>
          <Form btnHandler={btnHandler} />
          <Lists todos={todos} deleteTodos={deleteTodos} updateTodos={updateTodos}/>
        </div>
      </div>
    </>
  );
};

export default App;
