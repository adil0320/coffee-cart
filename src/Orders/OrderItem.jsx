import React from "react";

const OrderItem = (props) => {
  return (
    <div key={props.id}>
      <span>
        Item Name: {props.name} ={">"}{" "}
      </span>
      <span>
        {props.quantity} x ${props.price} = ${props.quantity * props.price}
      </span>
    </div>
  );
};

export default OrderItem;
