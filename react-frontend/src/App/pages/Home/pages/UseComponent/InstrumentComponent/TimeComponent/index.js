import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "TimeComponent";

class TimeComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          개방 시간
        </div>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-daily`)}>
            월~금
          </div>
          <div className={cx(`${moduleName}-content-time`)}>
            {this.props.weekTime1} ~ {this.props.weekTime2}
          </div>
          <div className={cx(`${moduleName}-content-daily`)}>
            토요일
          </div>
          <div className={cx(`${moduleName}-content-time`)}>
            {this.props.weekendTime1} ~ {this.props.weekendTime2}
          </div>
          <div className={cx(`${moduleName}-content-daily`)}>
            점심시간
          </div>
          <div className={cx(`${moduleName}-content-time`)}>
            {this.props.breakTime1} ~ {this.props.breakTime2}
          </div> 
        </div>
      </div>
    )
  }
}
export default TimeComponent;