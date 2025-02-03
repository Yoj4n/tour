import React from "react";
import "../../styles/carrito/CartItem.css";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <tr className="cart-item">
      <td>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          <FaTimes />
        </button>
      </td>
      <td>{item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.id)}><FaMinus /></button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}><FaPlus /></button>
        </div>
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
