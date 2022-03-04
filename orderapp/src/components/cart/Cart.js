
import React ,{useContext}from "react";
import './Cart.css'
import CartItem from "./CartItem";
import CartContext from "../../store/Cart-context";
import Modal from "../ui/Modal";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1})
        // cartCtx.addItem(item);
    }
    const cartItems = (
        <ul className="cart-items">
        {
            // [{id:'c1', name:'Sushi',amount:2, price:12.99}].map((item)=>(<li>{item.name}</li>))
            cartCtx.items.map((item)=>(
                // <li>{item.name}</li>
                <CartItem key={item.id}
                          name={item.name}
                          amount={item.amount}
                          price={item.price}
                          onAdd={cartItemAddHandler.bind(null,item.id)}
                          onRemove={cartItemRemoveHandler.bind(null,item)}
                />
            ))
        }
    </ul>
    );
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                {hasItems && <button className="button">Order</button>}
            </div>
        </Modal>
    )

}
export default Cart;