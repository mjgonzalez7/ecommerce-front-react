import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge">3</span>
    </div>
  );
}

export default CartWidget;
