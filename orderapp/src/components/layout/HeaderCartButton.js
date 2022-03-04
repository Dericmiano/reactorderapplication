import React from "react";
import {useContext} from "react";
import CartContext from "../../store/Cart-context";
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.css'
 const HeaderCartButton = (props) => {
    const  cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    },0);
    const btnClasses = `${classes.button} ${classes.bump}`;
     return(
         <button className={btnClasses} onClick={props.onClick}>
             <span className="icon">
                 <CartIcon/>
             </span>
             <span>Your cart</span>
             <span className="badge">{numberOfCartItems}</span>

         </button>
     )

 }
 export default HeaderCartButton;