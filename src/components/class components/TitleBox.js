import React from "react";
import { MyContext } from "../../context/MyContext";

class TitleBox extends React.Component {
  static contextType = MyContext;
  render() {
    const { state } = this.context;
    return (
      <>
        <h1 className="item_title">{state.title}</h1>
        <span className="item_no">Item No. {state.itemNo}</span>
      </>
    );
  }
}

export default TitleBox;
// TitleBox.contextType = MyContext;
