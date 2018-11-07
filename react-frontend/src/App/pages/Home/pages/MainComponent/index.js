import React, { Component } from "react";
import { Link } from "react-router-dom";

import classnames from "classnames/bind";

import maker_space from "src/App/pages/Home/assets/KAU_DRONE.jpg";
import maker_space_in from "src/App/pages/Home/assets/makerspace.png"
import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "MainComponent";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-introduce`)}
          style={{
            backgroundImage: "url("+cx(`${maker_space}`)+")",
          }}
          >
            <div className={cx(`${moduleName}-content-text`)}>
              <h1>KAU 드론&공예</h1>
              <h1>메이커 스페이스</h1>
            </div>
          </div>
        </div>
        <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-content`)}
          style={{
            backgroundImage: "url("+cx(`${maker_space_in}`)+")",
          }}
          >
            <div className={cx(`${moduleName}-detail-container`)}>
              <div className={cx(`${moduleName}-detail-title`)}>
                <h1>이달의 행사</h1>
                <div className={cx(`${moduleName}-more`)}>
                  <h6><Link to="/festival">+더보기</Link></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-content`)}
            style={{
              backgroundColor: 'white',
            }}
          >
            <div className={cx(`${moduleName}-detail-container`)}>
              <div className={cx(`${moduleName}-detail-title`)}>
                <h1>우수 작품</h1>
                <div className={cx(`${moduleName}-more`)}>
                  <h6><Link to="/goods">+더보기</Link></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(`${moduleName}-box`)}>
          <div className={cx(`${moduleName}-content`)} 
               style={{ backgroundColor: 'rgb(240,240,240)'}}
          >
            <div className={cx(`${moduleName}-detail-container`)}>
              <div className={cx(`${moduleName}-detail-title`)}>
                <h1>활동 사진</h1>
                <div className={cx(`${moduleName}-more`)}>
                  <h6><Link to="/communication/activity">+더보기</Link></h6>
                </div>
              </div>
              <div className={cx(`${moduleName}-detail-content`)}>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default MainComponent;
