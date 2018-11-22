import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "MethodComponent";

class MethodComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-method`)}>
          <div className={cx(`${moduleName}-method-image`)}>
            <img src={this.props.methodImage1} alt="이미지"/>
          </div>
          <div className={cx(`${moduleName}-method-number`)}>
            1
          </div>
          <div className={cx(`${moduleName}-method-title`)}>
            {this.props.methodTitle1}
          </div>
          <div className={cx(`${moduleName}-method-content`)}>
            {this.props.methodContent1}
          </div>
        </div>
        <div className={cx(`${moduleName}-method`)}>
          <div className={cx(`${moduleName}-method-image`)}>
            <img src={this.props.methodImage2} alt="이미지"/>
          </div>
          <div className={cx(`${moduleName}-method-number`)}>
            2
          </div>
          <div className={cx(`${moduleName}-method-title`)}>
            {this.props.methodTitle2}
          </div>
          <div className={cx(`${moduleName}-method-content`)}>
            {this.props.methodContent2}
          </div>
        </div>
        <div className={cx(`${moduleName}-method`)}>
          <div className={cx(`${moduleName}-method-image`)}>
            <img src={this.props.methodImage3} alt="이미지"/>
          </div>
          <div className={cx(`${moduleName}-method-number`)}>
            3
          </div>
          <div className={cx(`${moduleName}-method-title`)}>
            {this.props.methodTitle3}
          </div>
          <div className={cx(`${moduleName}-method-content`)}>
            {this.props.methodContent3}
          </div>
        </div>
      </div>
    )
    }
}
export default MethodComponent;