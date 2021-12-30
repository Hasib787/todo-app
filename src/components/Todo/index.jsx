import React from "react";

const Todo = ({todo, text, todos, setTodos}) => {
    //Events

    //edit item
    const editItem = (id) => {
       let newEditItem = todos.find(item => item.id === id);
       console.log("new edit item",newEditItem);
    };

  const deleteItemHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div  className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={editItem} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
      <button onClick={deleteItemHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
