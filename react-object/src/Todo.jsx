import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

export default function Todo() {
  let [todo, setTodo] = useState([
    { task: "sample task", id: uuidv4(), isDone: false }
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, { task: newTodo, id: uuidv4(), isDone: false }]);
      setNewTodo("");
    }
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  function deleteTodoItem(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function upperCaseAll() {
    setTodo(todo.map((item) => ({ ...item, task: item.task.toUpperCase() })));
  }

  function upperCaseOne(id) {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, task: item.task.toUpperCase() } : item
      )
    );
  }

  function doneFinal(id) {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  let giveStyle = (isDone) => {
    return isDone
      ? { textDecoration: "line-through", color: "gray" }
      : { textDecoration: "none", color: "black" };
  };

  return (
    <div className="todo-container">
      <div className="userInput">
        <input
        onChange={updateTodoValue}
        placeholder="Add a task"
        value={newTodo}
        type="text"
      />
      <button onClick={addNewTodo}>Add Task</button>
      </div>
      <br />
      <hr />
      <h4 style={{color:"blue", fontWeight:"700px", textDecoration:"underline"}}>Task Todo</h4>
   
    <ul>
        {todo.map((todoItem) => (
          <li className="todoItem" key={todoItem.id} style={giveStyle(todoItem.isDone)}>
            <button className="done" onClick={() => doneFinal(todoItem.id)}>Done</button>
            <span title={todoItem.task}>{todoItem.task}</span>

            <button className="delete" onClick={() => deleteTodoItem(todoItem.id)}>Delete</button>
            <button className="uppercase" onClick={() => upperCaseOne(todoItem.id)}>
              UpperCase
            </button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase-All</button>
    </div>
  );
}
