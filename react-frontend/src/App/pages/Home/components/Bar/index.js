import React, { Component } from "react";
import { Link} from "react-router-dom";
import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "Bar";

class Bar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showAboutMenu: false
    };
  }
  handleHover = () => {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave = () => {
    this.setState({ showAboutMenu: false });
  };
  render() {
    let location = window.location.href.split("/");
    return (
      <div className={cx(`${moduleName}`)}>
        <Link to="/festival">
          <button className={location[location.length-1]==="festival"?cx(`${moduleName}-button-focus`):cx(`${moduleName}-button-not-focus`)}>행사 안내</button>
        </Link>
        <Link to="/goods">
          <button className={location[location.length-1]==="goods"?cx(`${moduleName}-button-focus`):cx(`${moduleName}-button-not-focus`)}>작품 구경</button>
        </Link>
        <Link to="/communication/notice" onMouseEnter={this.handleHover} onMouseOut={this.handleLeave}>
          <button  className={location[location.length-2]==="communication"?cx(`${moduleName}-button-focus`):cx(`${moduleName}-button-not-focus`)}>소통 공간</button>
        </Link>
        <Link to="/equip_space">
          <button className={location[location.length-1]==="equip_space"?cx(`${moduleName}-button-focus`):cx(`${moduleName}-button-not-focus`)}>장비&공간 신청</button>
        </Link>
        <div className={cx(`${moduleName}-detail-menu`)}>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
          &nbsp;
          </div>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
          &nbsp;
          </div>
          {this.state.showAboutMenu && <div className={cx(`${moduleName}-detail-menu-item`)} onMouseEnter= {this.handleHover} onMouseOut={this.handleLeave}>
            <Link to="/communication/notice" onMouseEnter= {this.handleHover} >
              <button className={location[location.length-1]==="notice"?cx(`${moduleName}-button-focus-detail`):cx(`${moduleName}-button-not-focus-detail`)}>공지사항</button>
            </Link>
            <br/>
            <Link to="/communication/information" onMouseEnter= {this.handleHover} >
              <button onMouseOut={this.handleLeave} className={location[location.length-1]==="information"?cx(`${moduleName}-button-focus-detail`):cx(`${moduleName}-button-not-focus-detail`)}>정보공유</button>
            </Link>
            <br />
            <Link to="/communication/activity" onMouseEnter= {this.handleHover}>
              <button onMouseOut={this.handleLeave} className={location[location.length-1]==="activity"?cx(`${moduleName}-button-focus-detail`):cx(`${moduleName}-button-not-focus-detail`)}>활동사진</button>
            </Link>
          </div>}
          <div className={cx(`${moduleName}-detail-menu-item`)}>
          &nbsp;
          </div>
        </div>
      </div>
      
    );
  }
}

export default Bar;
