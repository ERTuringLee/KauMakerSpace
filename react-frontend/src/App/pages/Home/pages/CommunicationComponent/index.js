import React, { Component } from "react";
import {Redirect} from "react-router-dom";

class CommuncationCompoonent extends Component {
  render() {
    return (
      <Redirect to='/communication/notice'/>
    )
  }
}
export default CommuncationCompoonent;