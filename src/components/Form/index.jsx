import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  console.log(inputText);
  const addItemHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        isCompleted: false,
        id: Math.floor(Math.random() * 100),
      },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={addItemHandler} className="todo-button" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default Form;
