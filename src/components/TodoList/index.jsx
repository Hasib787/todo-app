import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <div className="todo">
              <li className="todo-item">{todo.text}</li>
              <button className="complete-btn"><i className="fas fa-edit"></i></button>
              <button className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
