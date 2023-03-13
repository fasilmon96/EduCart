import React from "react";
import "./Tabel.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../Redux/Cart";
import { useEffect } from "react";

function Tabel() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTotals());
  },[cart,dispatch])

  const handleRemoveFromCart = (cartList) => {
    dispatch(removeFromCart(cartList));
  };

  const handleDecreaseCart = (cartList) => {
    dispatch(decreaseCart(cartList));
  };
  const handleIncreaseCart=(cartList)=>{
    dispatch(addToCart(cartList))
  }
  const handleclearCart=()=>{
    dispatch(clearCart())
  }

  return (
    <div id="wq">
      <h2 className="zxz">Shopping Cart </h2>
      {cart.cartList.length === 0 ? (
        <div className="cart-empty">
          <p className="empty">Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to={"/"}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="faz"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-Rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </div>
              <h6 className="empty1">Start Shopping</h6>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th className="op">Product</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              {cart.cartList.map((cartList) => {
                return (
                  <tbody>
                    <tr>
                      <td className="fazx">
                        <img src={cartList.url} alt="" />
                      </td>
                      <h2 className="vcc">{cartList.name}</h2>
                      <p>{cartList.category}</p>
                      <button
                        onClick={() => handleRemoveFromCart(cartList)}
                        className="sc"
                      >
                        REMOVE
                      </button>

                      <td id="ds">
                        {" "}
                        <i id="ds" class="fa-solid fa-indian-rupee-sign"></i>
                        {cartList.price}
                      </td>
                      <td>
                        <button onClick={()=>handleIncreaseCart(cartList)} className="zb">+</button>
                        {cartList.cartQuantity}
                        <button
                          onClick={() => handleDecreaseCart(cartList)}
                          className="zc"
                        >
                          -
                        </button>
                      </td>
                      <td id="ds">
                        {" "}
                        <i id="ds" class="fa-solid fa-indian-rupee-sign"></i>
                        {cartList.price * cartList.cartQuantity}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>

          <div id="cart-summary" className="container">
            <button onClick={()=>handleclearCart()} className="zzz" clear-cart>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <h3 className="was"> Subtotal</h3>
                <p className="amount">
                  {" "}
                  <i id="eas" class="fa-solid fa-indian-rupee-sign"></i>
                  {cart.cartTotalAmount}
                </p>
              </div>
              <div className="checkt">
                <p className="nx">Taxes and shipping calculated at checkout</p>
                <button className="check">Check out</button>
              </div>
              <div className="continue-shopping">
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="370"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-Rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <h2 className="lk">Continue Shopping</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tabel;
