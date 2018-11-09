import React, { Component } from "react";
import { Link } from "react-router-dom";

import classnames from "classnames/bind";

import maker_space from "src/App/pages/Home/assets/KAU_DRONE.jpg";
import maker_space_in from "src/App/pages/Home/assets/makerspace.png"
import festival1 from "src/App/pages/Home/assets/festival1.png";
import festival2 from "src/App/pages/Home/assets/festival2.png";
import festival3 from "src/App/pages/Home/assets/festival3.png";
import goods1 from "src/App/pages/Home/assets/goods1.jpg";
import goods2 from "src/App/pages/Home/assets/goods2.jpg";
import goods3 from "src/App/pages/Home/assets/goods3.jpg";
import makers_active from "src/App/pages/Home/assets/makers_active.jpeg"
import makers_active2 from "src/App/pages/Home/assets/makers_active2.jpeg"
import makers_active3 from "src/App/pages/Home/assets/makers_active3.jpeg"

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "MainComponent";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      data1: [
        {id: 4, src:cx(`${festival1}`), title: "메이커를 위한 아두이노 교육", apply1: "18.11.01", apply2: "18.11.10", f_time1: "18.11.12", f_time2: "18.11.13", type1: "무료", type2: "교육", remain: 19, register: 1, original: 20},
        {id: 3, src:cx(`${festival2}`), title: "함께하는 로봇 세미나", apply1: "18.11.05", apply2: "18.11.15", f_time1: "18.11.17", f_time2: "18.11.17", type1: "무료", type2: "세미나", remain: 10, register: 10, original: 20},
        {id: 2, src:cx(`${festival3}`), title: "메이커를 위한 3D 모델링 교육", apply1: "18.11.03", apply2: "18.11.17", f_time1: "18.11.19", f_time2: "18.11.23", type1: "유료", type2: "교육", remain: 19, register: 1, original: 20}
      ],
      data2: [
        {id:9, url:cx(`${goods1}`), title:'나무 휴대폰충전독과 수납장', writer:'Arthur',date:'18.11.06'},
        {id:8, url:cx(`${goods2}`), title:'티타늄 열쇠고리', writer:'Daniel',date:'18.11.06'},
        {id:7, url:cx(`${goods3}`), title:'자작 휴대폰 케이스', writer:'Erwin',date:'18.11.06'}
      ],
      data3: [
        {id:9, url:cx(`${makers_active}`), title:"창업동아리 SEED 정기모임", date:"18.11.06"},
        {id:8, url:cx(`${makers_active2}`), title:"자작 크리스마스 트리만들기", date:"18.11.06"},
        {id:7, url:cx(`${makers_active3}`), title:"유치원생 대상 창의력증진교육", date:"18.11.06"}
      ]

    };
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
              <div className={cx(`${moduleName}-detail-content`)}>
                {this.state.data1.map((post) =><Link to={`/festival/detail/${post.id}`}><div className={cx(`${moduleName}-detail-content-card`)}>
                  <div className={cx(`${moduleName}-detail-content-card-image`)}>
                    <img src={post.src} alt="이미지"></img>
                  </div>
                  <div className={cx(`${moduleName}-detail-content-card-image-content`)}>
                    <h5>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-type1`)}>{post.type1}</span>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-type2`)}>{post.type2}</span>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-time1`)}>{post.f_time1}</span>
                      <span>~</span>
                      <span className={cx(`${moduleName}-detail-content-card-image-content-time2`)}>{post.f_time2}</span>
                    </h5>
                    <h5>{post.title}</h5>
                  </div>
                </div></Link>)}
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
              <div className={cx(`${moduleName}-detail-content`)}>
                {this.state.data2.map((post) =><Link to={`/goods/${post.id}`}><div className={cx(`${moduleName}-detail-content-card`)}>
                  <div className={cx(`${moduleName}-detail-content-card-image`)}>
                    <img src={post.url} alt="이미지"></img>
                  </div>
                  <div className={cx(`${moduleName}-detail-content-card-image-content`)}>
                    <h5>{post.title}</h5>
                    <h5>메이커: {post.writer}</h5>
                  </div>
                </div></Link>)}
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
                {this.state.data3.map((post) =><Link to={`/communication/activity/${post.id}`}><div className={cx(`${moduleName}-detail-content-card`)}>
                  <div className={cx(`${moduleName}-detail-content-card-image`)}>
                    <img src={post.url} alt="이미지"></img>
                  </div>
                  <div className={cx(`${moduleName}-detail-content-card-image-content`)}>
                    <h5>{post.title}</h5>
                  </div>
                </div></Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default MainComponent;
