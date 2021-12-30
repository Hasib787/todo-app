import React, { useEffect, useState } from "react";
import Form from "../Form";
import TodoList from "../TodoList";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  //useEffect
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);
  //save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div>
      <Form
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList inputText={inputText} setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Home;
