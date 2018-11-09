import React, { Component } from "react";
import {Link} from "react-router-dom"

import classnames from "classnames/bind";

import festival1 from "src/App/pages/Home/assets/festival1.png";
import festival2 from "src/App/pages/Home/assets/festival2.png";
import festival3 from "src/App/pages/Home/assets/festival3.png";
import festival4 from "src/App/pages/Home/assets/festival4.png";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "FestivalComponent";

class FestivalComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        {id: 4, src:cx(`${festival1}`), title: "메이커를 위한 아두이노 교육", apply1: "18.11.01", apply2: "18.11.10", f_time1: "18.11.12", f_time2: "18.11.13", type1: "무료", type2: "교육", remain: 19, register: 1, original: 20},
        {id: 3, src:cx(`${festival2}`), title: "함께하는 로봇 세미나", apply1: "18.11.05", apply2: "18.11.15", f_time1: "18.11.17", f_time2: "18.11.17", type1: "무료", type2: "세미나", remain: 10, register: 10, original: 20},
        {id: 2, src:cx(`${festival3}`), title: "메이커를 위한 3D 모델링 교육", apply1: "18.11.03", apply2: "18.11.17", f_time1: "18.11.19", f_time2: "18.11.23", type1: "유료", type2: "교육", remain: 19, register: 1, original: 20},
        {id: 1, src:cx(`${festival4}`), title: "DIY 목공교육", apply1: "18.11.07", apply2: "18.11.24", f_time1: "18.11.26", f_time2: "18.11.30", type1: "유료", type2: "교육", remain: 29, register: 1, original: 30}
      ]
    };
  }
  componentDidMount () {
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          <div className={cx(`${moduleName}-title-text`)}>
            행사 안내
          </div>
          <div className={cx(`${moduleName}-title-category`)}>
            <Link to="/">HOME</Link> > <Link to="/festival">행사 안내</Link>
          </div>
        </div>
        <div className={cx(`${moduleName}-search`)}>
          <div className={cx(`${moduleName}-search-container`)}>
            <input type="text" placeholder="검색어를 입력해주세요." />
          </div>
        </div>
        <div className={cx(`${moduleName}-month`)}>
          <div className={cx(`${moduleName}-month`)}>
          </div>
        </div>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-container`)}>
          {this.state.data.map((post) =>
            <div className={cx(`${moduleName}-content-card`)}>
              <div className={cx(`${moduleName}-card-image`)}>
                <img src={post.src} alt="카드이미지"/>
              </div>
              <div className={cx(`${moduleName}-card-description`)}>
                <div className={cx(`${moduleName}-card-description-title`)}>
                  <h1>{post.title}</h1>
                </div>
                <div className={cx(`${moduleName}-card-description-content`)}>
                  <h5>신청기간: {post.apply1} ~ {post.apply2}</h5>
                  <h5>행사기간: {post.f_time1} ~ {post.f_time2}</h5>
                  <h5>유형: <span className={cx(`${moduleName}-card-description-content-type1`)}>{post.type1}</span><span className={cx(`${moduleName}-card-description-content-type2`)}>{post.type2}</span></h5>
                  <h5>{post.remain}명 남음 ({post.register}/{post.original})</h5>
                </div>
                <div className={cx(`${moduleName}-card-description-button`)}>
                  <Link to={`/festival/detail/${post.id}`}><button className={cx(`${moduleName}-card-description-button-detail`)}>상세보기</button></Link><Link to={`/festival/register/${post.id}`}><button className={cx(`${moduleName}-card-description-button-apply`)}>신청하기</button></Link>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default FestivalComponent;
