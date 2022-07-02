import React from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from './components/TodoList'
import { useState } from "react";


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Buy a monthly pass',
      checked: true,
    }, 

    {
      id: 2,
      text: 'Send a message to Kelly',
      checked: true,
    }, 

    {
      id: 3,
      text: "Book a restuarant for Kelly's Birthday",
      checked: false,
    }
  ]);


  return (
    <>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList todos={todos}></TodoList>
      </TodoTemplate>
    </>
  );
};

export default App;
