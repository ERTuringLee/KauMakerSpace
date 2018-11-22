import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";
import IndividualTitle from "../Common/IndividualTitleComponent"
import Time from "./TimeComponent"
import Method from "./MethodComponent"

const cx = classnames.bind(css);
const moduleName = "InstrumentComponent";

class InstrumentComponent extends Component {
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
          <div className={cx(`${moduleName}-container-detail`)}>
            <Time weekTime1={this.props.weekTime1}
              weekTime2={this.props.weekTime2}
              weekendTime1={this.props.weekendTime1}
              weekendTime2={this.props.weekendTime2}
              breakTime1={this.props.breakTime1}
              breakTime2={this.props.breakTime2}/>
            <Method methodImage1={this.props.methodImage1}
              methodTitle1={this.props.methodTitle1}
              methodContent1={this.props.methodContent1}
              methodImage2={this.props.methodImage2}
              methodTitle2={this.props.methodTitle2}
              methodContent2={this.props.methodContent2}
              methodImage3={this.props.methodImage3}
              methodTitle3={this.props.methodTitle3}
              methodContent3={this.props.methodContent3}/>
          </div>
        </div>
      </div>
    )
  }
}
export default InstrumentComponent 