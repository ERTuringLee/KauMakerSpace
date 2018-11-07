import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "NoticeComponent";

class NoticeComponent extends Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
        <div className={cx(`${moduleName}`)}>
            <div className={cx(`${moduleName}-title`)}>
                <div className={cx(`${moduleName}-title-text`)}>
                    공지사항
                </div>
                <div className={cx(`${moduleName}-title-category`)}>
                    <Link to="/">HOME</Link> > <Link to="/communication/notice">소통 공간</Link> > <Link to="/communication/notice">공지사항</Link>
                </div>
            </div>
        </div>
      )
    }
}
export default NoticeComponent;