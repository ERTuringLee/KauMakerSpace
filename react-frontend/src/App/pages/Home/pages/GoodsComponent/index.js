import React, { Component } from "react";
import { Link } from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";

import goods1 from "src/App/pages/Home/assets/goods1.jpg";
import goods2 from "src/App/pages/Home/assets/goods2.jpg";
import goods3 from "src/App/pages/Home/assets/goods3.jpg";

const cx = classnames.bind(css);
const moduleName = "GoodsComponent";

class GoodsComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        {id:9, url:cx(`${goods1}`), title:'나무 휴대폰충전독과 수납장', writer:'Arthur',date:'18.11.06'},
        {id:8, url:cx(`${goods2}`), title:'티타늄 열쇠고리', writer:'Daniel',date:'18.11.06'},
        {id:7, url:cx(`${goods3}`), title:'자작 휴대폰 케이스', writer:'Erwin',date:'18.11.06'},
        {id:6, url:cx(`${goods1}`), title:'나무 휴대폰충전독과 수납장', writer:'Arthur',date:'18.11.06'},
        {id:5, url:cx(`${goods2}`), title:'티타늄 열쇠고리', writer:'Daniel',date:'18.11.06'},
        {id:4, url:cx(`${goods3}`), title:'자작 휴대폰 케이스', writer:'Erwin',date:'18.11.06'},
        {id:3, url:cx(`${goods1}`), title:'나무 휴대폰충전독과 수납장', writer:'Arthur',date:'18.11.06'},
        {id:2, url:cx(`${goods2}`), title:'티타늄 열쇠고리', writer:'Daniel',date:'18.11.06'},
        {id:1, url:cx(`${goods3}`), title:'자작 휴대폰 케이스', writer:'Erwin',date:'18.11.06'}
      ]
    };
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          <div className={cx(`${moduleName}-title-text`)}>
            작품 구경
          </div>
          <div className={cx(`${moduleName}-title-category`)}>
          <Link to="/">HOME</Link> > <Link to="/goods">작품 구경</Link>
          </div>
        </div>
        <div className={cx(`${moduleName}-search`)}>
          <div className={cx(`${moduleName}-search-container`)}>
            <input type="text" placeholder="검색어를 입력해주세요." />
          </div>
        </div>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-container`)}>
          </div>
        </div>
        <div className={cx(`${moduleName}-content`)}>
          {this.state.data.map((post) =>
          <Link to={`/goods/{post.id}`}>
          <div className={cx(`${moduleName}-content-card`)}>
            <div className={cx(`${moduleName}-image`)}>
              <img src={post.url} alt="image"/>
            </div>
            <div className={cx(`${moduleName}-image-title`)}>
              <h6>{post.title}</h6>
              <h6>작성자: {post.writer}</h6>
            </div>
            <div className={cx(`${moduleName}-image-date`)}>
              <h6>작성일: {post.date}</h6>
            </div>
          </div>)</Link>}
        </div>
      </div>
    );
  }
}

export default GoodsComponent;