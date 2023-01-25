import React from "react";

const Createtodo = ({handelchange,handelsubmit}) => {
 
  return (
    <div
      style={{
        border: "1px solid red",
        width: "80%",
        height: "100px",
        margin: "auto",
        marginBottom: "20px",
      }}
    >
      <input placeholder="enter todo" onChange={(e)=>handelchange(e.target.value)}/>
      <button
        onClick={()=>handelsubmit()}
        style={{ backgroundColor: "teal", marginLeft: "20px" }}
      >
        Addtodo
      </button>
    </div>
  );
};

export default Createtodo;
