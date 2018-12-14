import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../../components/Title";
import AdminBar from "../../../../components/AdminBar";

const cx = classnames.bind(css);
const moduleName = 'InformationManageComponent';

class InformationManageComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [

      ],
      page: [

      ],
      sessionData: [
        
      ]
    }
  }
  componentDidMount () {
    let self = this
    async function sessionCheck() {
      await axios.get('/session')
        .then(res => {
          const sessionData = res.data;
          self.setState({sessionData});
      })
      if (self.state.sessionData[0] ==='admin') {
        axios.get('/information')
        .then(res => {
          const data = res.data.reverse();
          this.setState({data});
          let lastPage = Math.ceil(data.length / 15);
          let page = "";
          for (let i=1;i<=lastPage;i++) {
            if (i!==lastPage) {
              page = page + i + ',';
            } else {
              page = page + i;
            }
          }
          page = page.split(',');
          this.setState({page})
        })
      } else if (self.state.sessionData[0] !== null) {
        window.location.href = '/'
      } else {
        window.location.href = '/login'
      }
    }
      document.documentElement.scrollTop = 0;
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <AdminBar />
        <Title
          title="정보공유"
          url1="admin/communication"
          url2="information"
          urlName1="소통 관리"
          urlName2="정보공유"/>
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
                                <td><Link to={`/communication/information/${post.no}`}>{post.title}</Link></td>
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

export default InformationManageComponent;