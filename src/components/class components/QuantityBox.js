import React from "react";
import { MyContext } from "../../context/MyContext";

class QuantityBox extends React.Component {
  static contextType = MyContext;

  render() {
    const { decreaseQuantity, quantity, incrementQuantity } = this.context;
    return (
      <>
        <button onClick={decreaseQuantity}>-</button>
        <input
          type="text"
          placeholder="1"
          value={String(quantity)}
          readOnly
        ></input>
        <button onClick={incrementQuantity}>+</button>
      </>
    );
  }
}

export default QuantityBox;
