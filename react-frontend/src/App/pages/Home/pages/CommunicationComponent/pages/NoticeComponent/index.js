import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../../components/Title"
import Bar from "../../../../components/Bar"
const cx = classnames.bind(css);

const moduleName = "NoticeComponent";

class NoticeComponent extends Component {
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
    axios.get('/notice')
      .then(res => {
        const data = res.data.reverse();
        this.setState({data});
        let lastPage = Math.ceil(data.length / 15);
        let page = "";
        for (var i=1; i<=lastPage; i++) {
          if (i!==lastPage){
            page = page + i +",";
          } else {
            page = page + i;
          }
        }
        page = page.split(',');
        this.setState({page})
       }) 
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Bar/>
        <Title 
          title="공지사항"
          url1="communication"
          url2="notice"
          urlName1="소통 공간"
          urlName2="공지사항"/>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-container`)}>
            <table>
              <tbody>
              <tr>
                <th width="10%">No</th>
                <th width="40%">제목</th>
                <th width="10%">첨부파일</th>
                <th width="10%">작성일</th>
                <th width="10%">작성자</th>
                <th width="10%">조회수</th>
              </tr>
            {this.state.data.map((post) => 
              <tr>
                <td>{post.no}</td>
                <td>
                  <Link to={`/communication/notice/${post.no}`}>{post.title}</Link>
                </td>
                <td>{post.file}</td>
                <td>{post.date}</td>
                <td>{post.writer}</td>
                <td>{post.view}</td>
              </tr>
            )}
            </tbody>
            </table>
          </div>
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
export default NoticeComponent;