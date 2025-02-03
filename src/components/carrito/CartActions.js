import React from "react";
import "../../styles/carrito/CartActions.css";

const CartActions = ({ updateCart, checkout }) => {
  return (
    <div className="cart-actions">
      <button className="update-cart" onClick={updateCart}>UPDATE CART</button>
      <button className="checkout" onClick={checkout}>CHECKOUT</button>
    </div>
  );
};

export default CartActions;
