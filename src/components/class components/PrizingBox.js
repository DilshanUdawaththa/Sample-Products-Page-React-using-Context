import React from "react";
import { MyContext } from "../../context/MyContext";

class PrizingBox extends React.Component {
  static contextType = MyContext;
  render() {
    const { state } = this.context;
    return (
      <>
        <span className="item_price">
          {state.currencySymbol}
          {state.price.begin}
          <sup>{state.price.last}</sup>
        </span>
      </>
    );
  }
}

export default PrizingBox;
// PrizingBox.contextType = MyContext;
