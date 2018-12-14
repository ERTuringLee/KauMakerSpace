import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from 'axios';
import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../components/Title"
import Bar from "../../../components/Bar"
const cx = classnames.bind(css);

const moduleName = "FestivalComponent";

class FestivalComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        
      ],
      filterData: [

      ]
    };
  }
  componentDidMount () {
    var locationArray = window.location.href.split('/')

    axios.get('/festival/'+locationArray[locationArray.length-1])
        .then(res => {
          const data = res.data
          this.setState({data})
        })
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Bar />
        <Title 
          title="행사 안내"
          url1="festival"
          url2=""
          urlName1="행사 안내"
          urlName2=""/>
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
              </div>
              <div className={cx(`${moduleName}-card-description-content-detail`)}>
                테스트
                <br />
                테스트
                <br /> 
                테스트
                <br />
                테스트
                <br />
                테스트
                <br />
                테스트
                <br />
              </div>
              <div className={cx(`${moduleName}-content-button`)}>
                  <Link to={`/festival/register/${post.id}`}><button className={cx(`${moduleName}-content-button-register`)}>신청하기</button></Link>
                  <Link to="/festival"><button className={cx(`${moduleName}-content-button-return`)}>돌아가기</button></Link>
                </div>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default FestivalComponent;