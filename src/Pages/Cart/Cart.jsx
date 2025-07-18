import React, { useContext } from "react";
import "./cart.css";
import { storeContext } from "../../Components/context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    
  const { cartItems, food_list, removeFromCart , getCartTotalAmount } = useContext(storeContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="croce" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <p>Delivery Charge</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 2}</b>
            </div>
          </div>
        <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code,Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
