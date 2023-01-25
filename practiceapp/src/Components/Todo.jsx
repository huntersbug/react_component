import React from "react";
import Createtodo from "./Createtodo";

const Todo = () => {
  const [todo, SetTodo] = React.useState([]);
  const [text, SetText] = React.useState("");
  const [edittext, Setedittext] = React.useState("");
  const [id, SetId] = React.useState();
  const handelchange = (value) => {
    SetText(value);
  };
  const handelsubmit = () => {
    let payload = { title: text };
    fetch("http://localhost:8080/posts", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => {
      Gettodo();
    });
  };
  const Gettodo = () => {
    fetch("http://localhost:8080/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        SetTodo(res);
      });
  };
  const handeldelete = (id) => {
    fetch(`http://localhost:8080/posts/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    }).then((res) => {
      Gettodo();
    });
  };
  const handeledit = (id, value) => {
Setedittext(value)
SetId(id)
  };
  const handele=(e)=>{
Setedittext(e.target.value)
  }
  React.useEffect(() => {
    Gettodo();
  }, []);
  const handelpatch=()=>{
    let payload = { title: edittext };
   
    fetch(`http://localhost:8080/posts/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(payload)
    }).then((res) => {
      Gettodo();
    });
  }
  return (
    <div
      style={{
        border: "1px solid red",
        width: "80%",
        height: "500px",
        margin: "auto",
      }}
    >
      Todo
      <Createtodo handelchange={handelchange} handelsubmit={handelsubmit} />
      <div
        style={{
          border: "1px solid teal",
          width: "80%",
          height: "300px",
          margin: "auto",
          marginTop: "px",
        }}
      >
        <h2>List of todo</h2>
        {todo.map((item) => (
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            key={item.id}
          >
            <li>{item.title}</li>
            <button onClick={() => handeldelete(item.id)}>Delete</button>
            <button onClick={() => handeledit(item.id, item.title)}>
              EDIT
            </button>
          </div>
        ))}
      </div>
      <div  >
        <input type="text" placeholder="edit todo" value={edittext} onChange={handele}/>
        <button onClick={handelpatch}>submit</button>
      </div>
    </div>
  );
};

export default Todo;
