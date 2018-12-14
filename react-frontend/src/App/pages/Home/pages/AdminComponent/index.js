import React, { Component } from "react";
import axios from 'axios'
import {Redirect} from "react-router-dom";

class AdminCompoonent extends Component {
  render () {
    return(<Redirect to='/admin/register'/>)
  }
}
export default AdminCompoonent;