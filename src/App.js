import React, { useState } from "react";
import './App.css';
import Active from "./components/Active/Active"
import All from "./components/All/All";
import Completed from "./components/Completed/Completed";
import uniqueid from "./function/getNewId";

function App() {

  const [Tab, setTab] = useState("All")
  const [NewTaskName, setNewTaskName] = useState("")
  const [ToDoList, setToDoList] = useState([
    {id: 1, name: "Shop some coffee", done: false },
    {id: 2, name: "Buy milk", done: true }
  ])

  const addNewTask = (e) => {

    e.preventDefault()

    if (NewTaskName !== '')
    {
      setToDoList([...ToDoList, {id: uniqueid(), name: NewTaskName, done: false}])
      setNewTaskName("")
    }
  }

  return (
    <div className="App">
      <h1 id="todo-title">#todo</h1>
      <div>
        <div className="tab-buttons">
          <button className="tab-button" onClick={() => setTab("All")}>All</button>
          <button className="tab-button" onClick={() => setTab("Active")}>Active</button>
          <button className="tab-button" onClick={() => setTab("Completed")}>Completed</button>
        </div>
        <div className="tab-view">
          {Tab === "All" ? <All ToDoList={ToDoList} setToDoList={setToDoList} setNewTaskName={setNewTaskName} NewTaskName={NewTaskName} addNewTask={addNewTask}/> : null}
          {Tab === "Active" ? <Active ToDoList={ToDoList} setToDoList={setToDoList} setNewTaskName={setNewTaskName} NewTaskName={NewTaskName} addNewTask={addNewTask}/> : null}
          {Tab === "Completed" ? <Completed ToDoList={ToDoList} setToDoList={setToDoList}/> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
