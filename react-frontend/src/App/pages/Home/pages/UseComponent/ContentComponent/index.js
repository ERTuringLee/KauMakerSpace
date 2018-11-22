import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";
import IndividualTitle from "../Common/IndividualTitleComponent"

const cx = classnames.bind(css);
const moduleName = "ContentComponent";

class ContentComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)} style={{backgroundColor:this.props.background}}>
        <div className={cx(`${moduleName}-container`)}>
          <IndividualTitle individualTitle={this.props.individualTitle} />
        </div>
      </div>
    )
  }
}
export default ContentComponent 
