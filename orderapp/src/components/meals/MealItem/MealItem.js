import {useContext} from "react";
import React from "react";
import './MealItem.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-context";
const MealItem = (props) => {
    const cartCTX = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = amount =>{
        cartCTX.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });

    }

    return(
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>

        </li>
    )

}
export default MealItem;