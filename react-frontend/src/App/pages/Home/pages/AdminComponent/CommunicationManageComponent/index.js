import React, { Component } from "react";
import {Redirect} from "react-router-dom";

class CommunicationManageCompoonent extends Component {
  render() {
    return (
      <Redirect to='/admin/communication/notice'/>
    )
  }
}
export default CommunicationManageCompoonent;