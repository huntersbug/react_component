import React, { useMemo } from "react";

const timeconsumingfunc=(delay)=> {
  let start = Date.now();
  while (Date.now() - start < delay) {
    continue;
  }
  return true;
}
const Todo = ({ title, status, id ,handeldelete,handelstatus}) => {
  const timeconsume = timeconsumingfunc(200)
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "60%",
        margin: "auto",
      }}
    >
      <div >{title}</div>
      <div style={{marginLeft:"10px"}}>{status ? "True" : "Flase"}</div>

      <button onClick={()=>handeldelete(id)} >Delete</button>
      <button onClick={()=>handelstatus(id)} >Change Status</button>
    </div>
  );
};
// const Shallowcheck=(prevprops,newprops)=>{
// return (prevprops.title ===newprops.title&&prevprops.id === newprops.id)
 

// }
// export default React.memo(Todo,Shallowcheck);
 export default Todo;

// when the proop changes it will re-render whole pages so write optimised the app
// so to avoid these things we use React.memo  if there is lots of time consuming operation in react app so by using React.MEMO WE OPTIMISE IT

// But in case of callback function it will not work so it check {}==={} both object has difference referce of address so to avoid this we use shallow check here with callback function


