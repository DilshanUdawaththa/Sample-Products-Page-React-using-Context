import React from "react";

import ProductImage from "../components/class components/ProductImage";
import TitleBox from "../components/class components/TitleBox";
import PrizingBox from "../components/class components/PrizingBox";
import QuantityBox from "../components/class components/QuantityBox";
import ProductTable from "../components/class components/ProductTable";

import "./ProductPage.css";
import { MyContext } from "../context/MyContext";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:
        "https://cdn11.bigcommerce.com/s-w4tnuohjvi/images/stencil/1280x1280/products/778/2288/3x3FloatingGolfGreen4__96181.1497886450.1280.1280__42407.1545132815.jpg?c=2?imbypass=on",
      title: "3' X 3' ACE FLOATING GREEN",
      itemNo: "MA000001",
      currencySymbol: "$",
      price: {
        begin: "150.",
        last: "00",
      },
      quantity: 1,
      arrayList: [],
    };

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  incrementQuantity(e) {
    e.preventDefault();
    this.setState((prestate) => ({
      quantity: parseInt(prestate.quantity + 1),
    }));
  }

  decreaseQuantity(e) {
    e.preventDefault();
    if (this.state.quantity > 1) {
      this.setState((prestate) => ({
        quantity: parseInt(prestate.quantity - 1),
      }));
    } else {
      this.setState({ quantity: 1 });
    }
  }

  submit(e) {
    e.preventDefault();
    const cartDetails = {
      id: new Date(),
      itemNo: this.state.itemNo,
      quantity: this.state.quantity,
      title: this.state.title,
      currencySymbol: this.state.currencySymbol,
      amount:
        parseFloat(this.state.quantity) * parseFloat(this.state.price.begin),
    };

    this.setState((prestate) => ({
      arrayList: [...prestate.arrayList, cartDetails],
    }));
  }

  deleteRow(pid) {
    debugger;
    if (pid !== "") {
      this.setState({
        arrayList: this.state.arrayList.filter((array) => array.id !== pid),
      });
    }
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          quantity: this.state.quantity,
          incrementQuantity: this.incrementQuantity,
          decreaseQuantity: this.decreaseQuantity,
          submit: this.submit,
          deleteRow: this.deleteRow,
          tableDetails: this.state.arrayList,
        }}
      >
        <>
          <form onSubmit={this.submit}>
            <section className="product">
              <div className="row">
                <div className="leftSide">
                  <ProductImage />
                </div>
                <div className="rightSide">
                  <div className="title_box">
                    <TitleBox />
                  </div>
                  <div className="prizing_box">
                    <PrizingBox />
                  </div>
                  <div className="quantity_box">
                    <QuantityBox />
                  </div>
                  <div className="cart_box">
                    <input type="submit" value="ADD TO CART >" />
                  </div>
                </div>
              </div>
            </section>
          </form>
          <section className="table">
            <ProductTable />
          </section>
        </>
      </MyContext.Provider>
    );
  }
}

export default ProductPage;
