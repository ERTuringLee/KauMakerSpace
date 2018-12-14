import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../components/Title"
// import Content from "./ContentComponent"
import AdminBar from "../../../components/AdminBar"

const cx = classnames.bind(css);
const moduleName = "EquipmentComponent";

class EquipmentComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        // {"id" : 1, "name" : "FL6090", "src":"localhost:6508/assets/FL6090.jpg","category1" : "레이저커터", "category2" : "", "category3" : "", "manufacturer" : "FineCNC", "how_to_use" : "온라인 예약", "limit_age" : "일반인(성인) 이상", "cost" : "재료비", "explanation" : [ { "id" : 1, "text" : "가공범위: 600x900mm" }, { "id" : 2, "text" : "해상도:0.025mm" }, { "id" : 3, "text" : "이송속도:25m/min" } ] },
        // {"id" : 2, "name" : "얼티메이커 2 extended +", "category1" : "3D프린터", "category2" : "", "category3" : "", "manufaturer" : "얼티메이커", "how_to_use" : "온라인 예약", "limit_age" : "고등학생 이상", "cost" : "재료비", "explanation" : [ { "id" : 1, "text" : "용도: 부품 및 시제품 제작" }, { "id" : 2, "text" : "작업 사이즈:223x223x305" }, { "id" : 3, "text" : "작업소재: PLA, ABS, TPU" } ] }
      ],
      page:[],
      sessionData: []
    }
  }
  componentDidMount() {
    let self = this;
    async function sessionCheck () {
      await axios.get("/session")
        .then(res => {
          const sessionData = res.data;
          self.setState({sessionData})
        })
      if (self.state.sessionData[0] === 'admin') {
        await axios.get("/equipment")
        .then(res => {
          const data = res.data;
          this.setState({data})
          let lastPage = Math.ceil(data.length / 10)
          let page = ""
          for (var i=1; i<=lastPage; i++) {
            if (i!==lastPage){
              page = page + i +","
            } else {
              page = page + i
            }
          }
          page = page.split(',')
          this.setState({page})
        })
      } else if (self.state.sessionData[0] !== null) {
        window.location.href = '/'
      } else {
        window.location.href = '/login'
      }
    }
    sessionCheck()
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <AdminBar />
        <Title 
          title="장비 관리"
          url1="admin/equipment"
          url2=""
          urlName1="장비 관리"
          urlName2=""/>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-container`)}>
          {this.state.data.map((post) =>
            <div className={cx(`${moduleName}-content-card`)}>
              <div className={cx(`${moduleName}-card-image`)}>
                <img src={post.src} alt="카드이미지"/>
              </div>
              <div className={cx(`${moduleName}-card-description`)}>
                <div className={cx(`${moduleName}-card-description-title`)}>
                  <div className={cx(`${moduleName}-card-description-title-detail`)}>
                    <h1>{post.name}</h1>
                  </div>
                </div>
                <div className={cx(`${moduleName}-card-description-content`)}>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>대분류</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.category1}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>중분류</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.category2}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>제조사</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.manufaturer}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>이용방법</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.how_to_use}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>사용연령 제한</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.limit_age}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>이용료</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.cost}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>장비설명</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>
                      {post.explanation.map((inPost)=>
                        <div>{inPost.text}</div>
                      )}
                    </div>
                  </div>
                </div>
                
              </div>
              <div className={cx(`${moduleName}-card-description-button`)}>
                <Link to={`/admin/equipment/modify/${post.id}`}><button className={cx(`${moduleName}-card-description-button-detail`)}>수정하기</button></Link>
                <Link to={`/admin/equipment/delete/${post.id}`}><button className={cx(`${moduleName}-card-description-button-detail`)}>삭제하기</button></Link>
              </div>
            </div>)}
          </div>
        </div>
        <div className={cx(`${moduleName}-pagination`)}>
          <div className={cx(`${moduleName}-pagination-container`)}>
          <div className={cx(`${moduleName}-pagination-detail`)}>&lt;</div>
          {this.state.page.map((post)=><div className={cx(`${moduleName}-pagination-detail`)} value={post}>{post}</div>)}
          <div className={cx(`${moduleName}-pagination-detail`)}>&gt;</div>
          </div>
        
        </div>
      </div>
    )
  }

}
export default EquipmentComponent;