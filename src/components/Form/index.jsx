import React from "react";

const Form = ({ inputText, setInputText, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //add item according to the current date and time
  const addItem = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        text: inputText,
        dateTime: new Date().toLocaleString(),
      };
      setTodos((prevTodos) => {
        return [...prevTodos, newTodo];
      });
      setInputText("");
    }
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={addItem} className="todo-button" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default Form;
