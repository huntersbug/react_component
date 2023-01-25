import React, { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
import style from "../Style/Card.module.css";
const Card = () => {
  const { state } = useContext(Appcontext);
  const [total, setTotal] = React.useState(0);

  const [data, setData] = React.useState(state.cart_item);
  const handelqty = (item) => {
    let newarray = [...data];
    let array = newarray.map((e) => {
      if (e.id === item.id) {
        if (Number(e.quantity) >= Number(e.qty)) {
          e = { ...e, qty: e.qty + 1 };

          return e;
        } else {
          alert("Out of stock quantity");
          return e;
        }
      } else {
        return e;
      }
    });

    setData(array);
  };
  React.useEffect(() => {
    let total = data.reduce((acc, curr) => {
      return (acc += curr.price * curr.qty);
    }, 0);
    setTotal(total);
  }, [data]);
  return (
    <>
      <h1>Shopping cart</h1>
      <div className={style.rightsidebar}>
        {data.length > 0 &&
          data.map((e) => (
            <div key={e.id} className={style.card_items}>
              <img src={e.imageURL} alt="_image" />
              <h4>{e.name}</h4>
              <h4>{e.price}</h4>
              <div className={style.qty}>
                <button onClick={() => handelqty(e)}>+</button>
                <span>{e.qty}</span>
                <button disabled={e.qty <= 0}>-</button>
              </div>
            </div>
          ))}
      </div>
      <h1>Total:{total}</h1>
    </>
  );
};

export default Card;
