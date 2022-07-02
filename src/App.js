import React, { useCallback, useRef } from "react";
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

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]);


  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default App;
