import React from "react";
import { MyContext } from "../../context/MyContext";

class ProductImage extends React.Component {
  static contextType = MyContext;
  render() {
    const { state } = this.context;
    return (
      <>
        <img src={state.image} alt="productImage.jpg" />
      </>
    );
  }
}

export default ProductImage;
// ProductImage.contextType = MyContext;
