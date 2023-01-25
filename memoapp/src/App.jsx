import React, { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todo from "./Todo";
const init = [
  { title: "Todo 1", status: false, id: 1 },
  { title: "Todo 2", status: false, id: 2 },
  { title: "Todo 3", status: false, id: 3 },
];
function App() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = React.useState("");
  const handeladd = () => {
    setTodos((prev) => [
      ...prev,
      { title: text, status: false, id: prev.length + 1 },
    ]);
  };

  
  const handeldelete = useCallback((id) => {
    const newtodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(newtodos);
  });

  const handelstatus = useCallback((id) => {

    const newtodos = todos.map((e) => {
      if (e.id == id) {
        return { ...e, status: !e.status };
      }
      return e;
    });

    setTodos(newtodos);
  })
  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handeladd}>Add</button>

      {todos.length > 0 &&
        todos.map((e) => (
          <Todo
            key={e.id}
            {...e}
            handeldelete={handeldelete}
            handelstatus={handelstatus}
          ></Todo>
        ))}
    </div>
  );
}

export default App;
