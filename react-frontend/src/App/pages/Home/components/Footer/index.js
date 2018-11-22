import React, { Component } from "react";
import classnames from "classnames/bind";
import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "Footer";

class Header extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-container`)}>
          <div className={cx(`${moduleName}-container-base`)}>
            우 10540 | 경기도 고양시 덕양구 항공대학로 76 (화전동, 한국항공대학교) 전자관 108호 | 02-300-0404 | maker@kau.ac.kr
          </div>
          <div className={cx(`${moduleName}-container-copyright`)}>
            Copyright (C) 2018 Maker Space of KOREA AEROSPACE UNIVERSITY. ALL Right Reseeved.
          </div>
        </div>
      </div>
    )
  }
}
export default Header;