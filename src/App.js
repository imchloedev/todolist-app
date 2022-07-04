import React, { useReducer, useCallback, useRef } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

function todoExample() {
  const array = [
    {
      id: 1,
      text: "Book a restaurant",
      checked: true,
    },
    {
      id: 2,
      text: "Send an email to professor",
      checked: false,
    },
    {
      id: 3,
      text: "Go to the grocery store",
      checked: false,
    },
  ];
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return (todos.concat(action.todo));

    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, todoExample);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    nextId.current += 1;
    dispatch({ type: "INSERT", todo });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default App;
