import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
import CartTable from "../components/Cart/CartTable";
import AuthContext from "../store/auth-context";

const CartPage = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const hasCartItems = cartCtx.items.length > 0;

  const orderSubmitHandler = async () => {
    await fetch("https://adils-cafe-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ email: authCtx.email, items: cartCtx.items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    cartCtx.clearCart();
  };

  let content = (
    <center>
      <h2>No Coffee, go add some.</h2>
    </center>
  );

  if (hasCartItems) {
    content = (
      <>
        <div className={classes.title}>Cart</div>
        <div className={classes.control}>
          <div className={classes.total}>
            <span>Total Amount:&nbsp;</span>
            <span>${cartCtx.totalAmount}</span>
          </div>
          <div className={`${classes.total} ${classes.order}`}>
            <span onClick={orderSubmitHandler}>Place Order</span>
          </div>
        </div>

        <CartTable />
      </>
    );
  }

  return content;
};

export default CartPage;
