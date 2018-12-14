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
    this.handleHover = this.handleHover.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }
  handleHover () {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave () {
    this.setState({ showAboutMenu: false });
  };
  render() {
    let location = window.location.href.split("/");
    return (
      <div className={cx(`${moduleName}`)}>
        <Link to="/admin/register">
          <button className={(location[location.length-1]==="register"||location[location.length-2]==="register")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus`)}>회원 관리</button>
        </Link>
        <Link to="/admin/festival">
          <button className={(location[location.length-1]==="festival"||location[location.length-3]==="festival")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus`)}>행사 관리</button>
        </Link>
        <Link to="/admin/education">
          <button className={(location[location.length-1]==="education"||location[location.length-2]==="education")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus`)}>교육 관리</button>
        </Link>
        <Link to="/admin/equipment">
          <button className={location[location.length-1]==="equipment"?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus`)}>장비 관리</button>
        </Link>
        <Link to="/admin/space">
          <button className={location[location.length-1]==="space"?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus`)}>공간 관리</button>
        </Link>
        <Link to="/admin/communication/notice" onMouseEnter={this.handleHover} onMouseOut={this.handleLeave}>
          <button  className={(location[location.length-2]==="communication"||location[location.length-3]==="communication")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus`)}>소통 관리</button>
        </Link>
        <div className={cx(`${moduleName}-detail-menu`)}>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
            &nbsp;
          </div>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
            &nbsp;
          </div>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
            &nbsp;
          </div>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
            &nbsp;
          </div>
          <div className={cx(`${moduleName}-detail-menu-item`)}>
            &nbsp;
          </div>
          {this.state.showAboutMenu && 
          <div className={cx(`${moduleName}-detail-menu-item`)}
            onMouseEnter= {this.handleHover} 
            onMouseOut={this.handleLeave}>
            <div className={cx(`${moduleName}-detail-menu-item-container`)}>
              <Link to="/admin/communication/notice" onMouseEnter= {this.handleHover} >
                <button onMouseOut={this.handleLeave} className={(location[location.length-1]==="notice"||location[location.length-2]==="notice")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus-detail`)}>공지사항</button>
              </Link>
            </div>
            <div className={cx(`${moduleName}-detail-menu-item-container`)}>
              <Link to="/admin/communication/information" onMouseEnter= {this.handleHover} >
                <button onMouseOut={this.handleLeave} className={(location[location.length-1]==="information"||location[location.length-2]==="information")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus-detail`)}>정보공유</button>
              </Link>
            </div>
            <div className={cx(`${moduleName}-detail-menu-item-container`)}>
              <Link to="/admin/communication/activity" onMouseEnter= {this.handleHover}>
                <button onMouseOut={this.handleLeave} className={(location[location.length-1]==="activity"||location[location.length-2]==="activity")?cx(`${moduleName}-focus`):cx(`${moduleName}-not-focus-detail`)}>활동사진</button>
              </Link>
            </div>
          </div>}
        </div>
      </div>
      
    );
  }
}

export default Bar;