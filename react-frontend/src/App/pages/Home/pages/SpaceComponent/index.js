import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../components/Title"
// import Content from "./ContentComponent"

const cx = classnames.bind(css);
const moduleName = "SpaceComponent";

class SpaceComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        
      ],
      page:[]
    }
  }
  componentDidMount() {
    axios.get("/space")
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
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Title 
          title="공간 안내"
          url1="space"
          url2=""
          urlName1="공간 안내"
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
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>수용인원</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.personnel}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>이용료</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.cost}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>이용자격</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.qualification}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>공간내 구비기기</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.equipment}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>운영시간</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>{post.time}</div>
                  </div>
                  <div className={cx(`${moduleName}-card-description-content-detail`)}>
                    <div className={cx(`${moduleName}-card-description-content-detail-title`)}>공간상세설명</div>
                    <div className={cx(`${moduleName}-card-description-content-detail-content`)}>
                      {post.explanation.map((inPost)=>
                        <div>{inPost.text}</div>
                      )}
                    </div>
                  </div>
                </div>
                
              </div>
              <div className={cx(`${moduleName}-card-description-button`)}>
                <Link to={`/equipment/register/${post.id}`}><button className={cx(`${moduleName}-card-description-button-detail`)}>신청하기</button></Link>
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
export default SpaceComponent;