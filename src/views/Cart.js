import React, { useState } from "react";
import "../styles/carrito/Cart.css";
import CartItem from "../components/carrito/CartItem";
import CartSummary from "../components/carrito/CartSummary";
import CouponForm from "../components/carrito/CouponForm";
import CartActions from "../components/carrito/CartActions";
import Banner from "../components/carrito/Banner";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "SUMMER HOLIDAY TO THE OXOLATAN RIVER",
      price: 1140,
      quantity: 5,
      image: "url-imagen",
    },
    {
      id: 2,
      name: "SANTORINI ISLAND'S WEEKEND VACATION",
      price: 1300,
      quantity: 1,
      image: "url-imagen",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = (code) => {
    console.log("Aplicando cupón:", code);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Banner />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeItem}
                    onIncrease={() => updateQuantity(item.id, 1)}
                    onDecrease={() => updateQuantity(item.id, -1)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cart-summary-container">
          <CouponForm applyCoupon={applyCoupon} />
          <CartSummary subtotal={subtotal} />
          <CartActions
            updateCart={() => console.log("Actualizando carrito")}
            checkout={() => console.log("Redirigir a pago")}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
