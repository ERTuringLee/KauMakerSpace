import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import classnames from "classnames/bind";
import css from "./index.scss";
import Title from "../../../../components/Title"
import Bar from "../../../../components/Bar"

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

      ],
      page: [

      ]
    };
  }
  componentDidMount () {
    axios.get('/activity')
      .then(res => {
        const data = res.data.reverse();
        this.setState({data})
        let lastPage = Math.ceil(data.length / 9)
          console.log(lastPage)
          let page = ""
          for (var i=1; i<=lastPage; i++) {
            if (i!==lastPage){
              page = page + i +","
            }else {
              page = page + i
            }
          }
          page = page.split(',')
          this.setState({page})
      }) 
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Bar />
        <Title 
            title="활동사진"
            url1="communication"
            url2="activity"
            urlName1="소통 공간"
            urlName2="활동사진"/>
        {/* <div className={cx(`${moduleName}-search`)}>
          <div className={cx(`${moduleName}-search-container`)}>
            <input type="text" placeholder="검색어를 입력해주세요." />
          </div>
        </div> */}
        <div className={cx(`${moduleName}-content`)}>
          {this.state.data.map((post) =><Link to={`/communication/activity/${post.id}`}> 
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
          </div></Link>)}
        </div>
        <div className={cx(`${moduleName}-pagination`)}>
          <div className={cx(`${moduleName}-pagination-container`)}>
            <div className={cx(`${moduleName}-pagination-detail`)}>&lt;</div>
            {this.state.page.map((post)=> <div className={cx(`${moduleName}-pagination-detail`)} 
              value={post}>{post}</div>)}
            <div className={cx(`${moduleName}-pagination-detail`)}>&gt;</div>
          </div>
        </div>
      </div>
)
}
}
export default ActivityComponent;
