import React, { useState } from "react";
import Form from "../Form";
import TodoList from "../TodoList";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form inputText={inputText}  setTodos={setTodos} setInputText={setInputText} />
      <TodoList  setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Home;
