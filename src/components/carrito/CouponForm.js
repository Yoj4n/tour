import React from "react";
import "../../styles/carrito/CouponForm.css";

const CouponForm = ({ applyCoupon }) => {
  return (
    <div className="coupon-form">
      <input type="text" placeholder="I have a discount coupon" />
      <button onClick={() => applyCoupon()}>APPLY COUPON</button>
    </div>
  );
};

export default CouponForm;
