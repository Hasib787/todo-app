import React, { useState } from "react";

const Todo = ({ todo, text, todos, setTodos }) => {
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [newText, setNewText] = useState("");
  const [isEditItem, setIsEditItem] = useState(null);

  //edit item
  const editItem = () => {
    let newEditItem = todos.find((item) => item.id === todo.id);
    setToggleSubmit(false);
    setNewText(text);
    setIsEditItem(todo.id);
    console.log("new edit item", newEditItem);
  };

  //submit new edit item
  const submitEditItem = () => {
    if (newText && !toggleSubmit) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return { ...item, text: newText };
          }
          return item;
        })
      );
    }
    setToggleSubmit(true);
    isEditItem();
  };

  const deleteItemHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <>
      {toggleSubmit ? (
        <div className="todo">
          <li className="todo-item">{text}</li>
          <button onClick={editItem} className="edit-btn">
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={deleteItemHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ) : (
        <div className="todo">
          <input
            type="text"
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={submitEditItem} type="submit" className="edit-btn">
            <i className="fas fa-check"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Todo;
