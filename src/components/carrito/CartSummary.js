import React from "react";
import "../../styles/carrito/CartSummary.css";

const CartSummary = ({ subtotal }) => {
  const vat = 18;
  const grandTotal = subtotal + vat;

  return (
    <div className="cart-summary">
      <p>Sub Total <span>${subtotal.toFixed(2)}</span></p>
      <p>Vat <span>${vat.toFixed(2)}</span></p>
      <p className="grand-total">Grand Total <span>${grandTotal.toFixed(2)}</span></p>
    </div>
  );
};

export default CartSummary;
