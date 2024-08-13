import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t));
    setTodos(updatedTodos);
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const updateTodo = async (todo: any) => {
    try {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: false } : t)));
    } catch (error: any) {
    setErrorMessage(error.response.data.message);
  }

  };

  const createTodo = async () => {
    try {
      const newTodo = await client.createTodo({ title: "New Task", completed: false });
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error posting todo:", error);
    }
  };

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };

  const deleteTodo = async (todo: any) => {
    try {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
    } catch (error: any) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }

  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <h4>
        Todos
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" id="wd-create-todo" />
        <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={todo.completed}
                onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
              />
              {!todo.editing ? (
                <span
                  style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                  onClick={() => editTodo(todo)}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  className="form-control w-50"
                  defaultValue={todo.title}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, title: e.currentTarget.value, editing: false });
                    }
                  }}
                  onChange={(e) => {
                    const updatedTodos = todos.map((t) =>
                      t.id === todo.id ? { ...todo, title: e.target.value } : t
                    );
                    setTodos(updatedTodos);
                  }}
                />
              )}
              <div className="ms-auto">
                <FaPencil onClick={() => editTodo(todo)} className="text-primary me-2 mt-1" />
                <FaTrash onClick={() => removeTodo(todo)} className="text-danger mt-1" id="wd-remove-todo" />
                <TiDelete onClick={() => deleteTodo(todo)} className="text-danger me-2 fs-3" id="wd-delete-todo" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

