import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";
import css from "./index.scss";
import makers_active from "src/App/pages/Home/assets/makers_active.jpeg"
import makers_active2 from "src/App/pages/Home/assets/makers_active2.jpeg"
import makers_active3 from "src/App/pages/Home/assets/makers_active3.jpeg"

const cx = classnames.bind(css);

const moduleName = "ActivityComponent";

class ActivityComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id:9, url:cx(`${makers_active}`), title:"창업동아리 SEED 정기모임", date:"18.11.06"},
        {id:8, url:cx(`${makers_active2}`), title:"자작 크리스마스 트리만들기", date:"18.11.06"},
        {id:7, url:cx(`${makers_active3}`), title:"유치원생 대상 창의력증진교육", date:"18.11.06"},
        {id:6, url:cx(`${makers_active}`), title:"창업동아리 SEED 정기모임", date:"18.11.06"},
        {id:5, url:cx(`${makers_active2}`), title:"자작 크리스마스 트리만들기", date:"18.11.06"},
        {id:4, url:cx(`${makers_active3}`), title:"유치원생 대상 창의력증진교육", date:"18.11.06"},
        {id:3, url:cx(`${makers_active}`), title:"창업동아리 SEED 정기모임", date:"18.11.06"},
        {id:2, url:cx(`${makers_active2}`), title:"자작 크리스마스 트리만들기", date:"18.11.06"},
        {id:1, url:cx(`${makers_active3}`), title:"유치원생 대상 창의력증진교육", date:"18.11.06"},
      ]
    };
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
        <div className={cx(`${moduleName}-search`)}>
          <div className={cx(`${moduleName}-search-container`)}>
            <input type="text" placeholder="검색어를 입력해주세요." />
          </div>
        </div>
        <div className={cx(`${moduleName}-content`)}>
          {this.state.data.map((post) => 
          <div className={cx(`${moduleName}-content-card`)}>
            <div className={cx(`${moduleName}-image`)}>
              <img src={post.url} alt="image"/>
            </div>
            <div className={cx(`${moduleName}-image-title`)}>
              <h6>{post.title}</h6>
            </div>
            <div className={cx(`${moduleName}-image-date`)}>
              <h6>작성일: {post.date}</h6>
            </div>
          </div>)}
        </div>
      </div>
)
}
}
export default ActivityComponent;
