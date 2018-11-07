import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "ActivityComponent";

class ActivityComponent extends Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
        <div className={cx(`${moduleName}`)}>
            <div className={cx(`${moduleName}-title`)}>
                <div className={cx(`${moduleName}-title-text`)}>
                    활동사진
                </div>
                <div className={cx(`${moduleName}-title-category`)}>
                    <Link to="/">HOME</Link> > <Link to="/communication/notice">소통 공간</Link> > <Link to="/communication/activity">활동사진</Link>
                </div>
            </div>
        </div>
      )
    }
}
export default ActivityComponent;
