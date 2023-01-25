import React, { useContext } from "react";
import style from "../Style/Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import{Link} from "react-router-dom"
import { Appcontext } from "../Context/Appcontext";
const Navbar = () => {
  const{state}=useContext(Appcontext)
  const [length_cart,setLength_cart] = React.useState(state.cart_item.length);
  React.useEffect(()=>{

setLength_cart(state.cart_item.length);
  },[state])
  return (
    <div className={style.container}>
      <p>Tree Rex Store</p>
<Link to="/" style={{textDecoration:"none"}}>   <h3 style={{color:"GrayText"}}>Products</h3></Link>
   
      <h3 className={style.cart}>

        <Link to="/cart" style={{textDecoration:"none"}}>       <AiOutlineShoppingCart  style={{color:"teal"}}/> <span>{length_cart}</span></Link>
 
      </h3>
    </div>
  );
};

export default Navbar;
