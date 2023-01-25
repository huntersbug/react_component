import axios from 'axios';
import React, { FC } from 'react'
import Todosinput from "../Component/Todosinput"

// export interface obj{
// id:number;
// title:string;
// status:boolean
// }

type obj = {
  id: number;
  title: string;
  status: boolean
}
const Todo = () => {
  const [todos, setTodos] = React.useState<obj[]>([])
  const getTodos = () => {
    axios.get("http://localhost:8080/todos").then((response) => {
      setTodos(response.data)


    }).catch((err) => {

    })
  }
  const addtodos = (text: string) => {
    const payload = { title: text, id: todos.length + 1, status: false }
    axios.post("http://localhost:8080/todos", payload).then((response) => {

      alert("Added todos")

    }).then(() => {
      getTodos()
    }).catch((err) => {
      alert("Error: ")
    })

  }
  const changestatus = (id: number, items: obj) => {
    // const payload = todos.map((e) => {
    //   if (e.id === id) {
    //     return { ...e, status: !e.status }
    //   }
    // }).filter((items) => {
    //   if (items?.id === id) {
    //     return items
    //   }
    // })
    const payload = { ...items, status: !items.status }

    axios.patch(`http://localhost:8080/todos/${id}`, payload).then(() => {
      getTodos()
    }).catch((err) => {

    })

  }
  React.useEffect(() => {
    getTodos()
  }, [])
  return (
    <div>
      <Todosinput addtodos={addtodos} />


      <div>
        <h2>Todos</h2>
        {todos?.map((items) => (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "auto", width: "50%", height: "auto" }} key={items.id}>
            <h2>{items.title}</h2>
            <button onClick={() => changestatus(items.id, items)}>{items.status ? "True" : "False"}</button>

          </div>))}
      </div>
    </div>
  )
}

export default Todo