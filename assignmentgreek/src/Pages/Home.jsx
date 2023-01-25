import React, { useContext, useState } from "react";
import { Appcontext } from "../Context/Appcontext";
import style from "../Style/Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const Home = () => {
  const { dispatch, state } = useContext(Appcontext);
  const [category, setCategory] = useState([]);
  const [cart_items, setCart_items] = useState(state.cart_item);
  const [data, setData] = React.useState(state.item);
  const [text, setText] = React.useState("");
  const Getdata = async () => {
    try {
      let response = await fetch(
        `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
      );

      let data = await response.json();
      dispatch({ type: "Get_Products", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    Getdata();
  }, []);
  const filtercategory = (e) => {
    let item = [...category];
    if (item.includes(e.target.value)) {
      let index = item.indexOf(e.target.value);

      item.splice(index, 1);
    } else {
      item.push(e.target.value);
      handelfilter();
    }
    setCategory(item);
  };
  const handelfilter = (item) => {
    if (text != "") {
      const firstLetter = text.charAt(0);
      const firstLetterCap = firstLetter.toUpperCase();
      const remainingLetters = text.slice(1);
      const capitalizedWord = firstLetterCap + remainingLetters;
      if (item.color === capitalizedWord || item.type === capitalizedWord) {
        console.log(item);
        return item;
      }
    }
    if (category.length === 0 && text === "") return item;
    if (
      category.includes("Red") ||
      category.includes("Green") ||
      category.includes(" Blue")
    ) {
      let value = category.includes(item.color);
      if (value) return item;
    } else if (category.includes("Men") || category.includes("Women")) {
      let value = category.includes(item.gender);
      if (value) return item;
    } else if (
      category.includes("Polo") ||
      category.includes("Hoodie") ||
      category.includes("Basic")
    ) {
      let value = category.includes(item.type);
      if (value) return item;
    }
  };
  const addtocart = (item) => {
    if (item.quantity === 0) {
      alert("Not in stock");
      return;
    }
    let checker_item_cart = cart_items.filter((e) => {
      if (Number(e.id) === Number(item.id)) {
        return true;
      }
    });

    if (checker_item_cart.length > 0) {
      alert("Already Available present in cart");
      return;
    } else {
      let cart = [...cart_items];
      let newitem = { ...item, qty: 1 };

      cart.push(newitem);
      setCart_items(cart);
      dispatch({ type: "Add_to_cart", payload: cart });
    }
  };
  const handelchange = (e) => {
    setText(e.target.value);
  };
  const handelsubmit = () => {};
  React.useEffect(() => {}, [category]);
  return (
    <>
      <div className={style.searchbox}>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Search Something"
            onChange={handelchange}
          />
        </div>
        <button onClick={handelsubmit}>
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </div>

      <div className={style.container}>
        {/* filter side bar */}

        <div className={style.leftsidebar}>
          <h4 className={style.colors}>Colors</h4>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              value="Red"
              id=""
              onChange={filtercategory}
            />
            <label>Red</label>
          </div>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Blue"
              onChange={filtercategory}
            />
            <label>Blue</label>
          </div>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Green"
              onChange={filtercategory}
            />
            <label>Green</label>
          </div>

          <h4 className={style.colors}>Gender</h4>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Men"
              onChange={filtercategory}
            />
            <label>Female</label>
          </div>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Women"
              onChange={filtercategory}
            />
            <label>Male</label>
          </div>

          <h4 className={style.colors}>Type</h4>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Polo"
              onChange={filtercategory}
            />
            <label>Polo</label>
          </div>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Hoodie"
              onChange={filtercategory}
            />
            <label>Hoodie</label>
          </div>

          <div className={style.checkbox}>
            <input
              type="checkbox"
              name=""
              id=""
              value="Basic"
              onChange={filtercategory}
            />
            <label>Basic</label>
          </div>
        </div>
        {/* right side  */}
        <div className={style.rightsidebar}>
          {state.item.length > 0 &&
            state.item.filter(handelfilter).map((e) => (
              <div key={e.id} className={style.card_items}>
                <img src={e.imageURL} alt="_image" />
                <h4>{e.name}</h4>
                <h4>{e.price}</h4>
                <div className={style.btn}>
                  <button onClick={() => addtocart(e)}>Add to cart</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
