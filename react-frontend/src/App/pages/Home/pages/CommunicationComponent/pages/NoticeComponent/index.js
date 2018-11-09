import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../../components/Title"
const cx = classnames.bind(css);

const moduleName = "NoticeComponent";

class NoticeComponent extends Component {
    constructor() {
      super();
      this.state = {
          data: [
              {no:15, title:"메이커 지원센터 화재예방 안내", url:"/communication/notice/15",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:14, title:"공간 및 장비 사용안내", url:"/communication/notice/14",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:13, title:"사무직 아르바이트 모집", url:"/communication/notice/13",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:12, title:"우수 참가자 수상 안내", url:"/communication/notice/12",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:11, title:"메이커 멘토 모집", url:"/communication/notice/11",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:10, title:"와이파이 사용 안내", url:"/communication/notice/10",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:9, title:"서버 점검 안내", url:"/communication/notice/9",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:8, title:"메이커 점검 안내", url:"/communication/notice/8",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:7, title:"메이커 점검 안내", url:"/communication/notice/7",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:6, title:"메이커 점검 안내", url:"/communication/notice/6",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:5, title:"메이커 점검 안내", url:"/communication/notice/5",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:4, title:"메이커 점검 안내", url:"/communication/notice/4",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:3, title:"메이커 점검 안내", url:"/communication/notice/3",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:2, title:"메이커 점검 안내", url:"/communication/notice/2",file:"", date:"18.11.06", writer:"관리자", view:"66"},
              {no:1, title:"메이커 점검 안내", url:"/communication/notice/1",file:"", date:"18.11.06", writer:"관리자", view:"66"}
          ]
      };
    }
    componentDidMount () {
        document.documentElement.scrollTop = 0;
    }
    render() {
      return (
        <div className={cx(`${moduleName}`)}>
          <Title 
            title="공지사항"
            url1="communication"
            url2="notice"
            urlName1="소통 공간"
            urlName2="공지사항"/>
            {/* <div className={cx(`${moduleName}-title`)}>
                <div className={cx(`${moduleName}-title-text`)}>
                    공지사항
                </div>
                <div className={cx(`${moduleName}-title-category`)}>
                    <Link to="/">HOME</Link> > <Link to="/communication/notice">소통 공간</Link> > <Link to="/communication/notice">공지사항</Link>
                </div>
            </div> */}
            <div className={cx(`${moduleName}-search`)}>
                <div className={cx(`${moduleName}-search-container`)}>
                    <input type="text" placeholder="검색어를 입력해주세요." />
                </div>
            </div>
            <div className={cx(`${moduleName}-content`)}>
                <div className={cx(`${moduleName}-content-container`)}>
                    <table>
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
                                <td><Link to={`/communication/notice/${post.no}`}>{post.title}</Link></td>
                                <td>{post.file}</td>
                                <td>{post.date}</td>
                                <td>{post.writer}</td>
                                <td>{post.view}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
      )
    }
}
export default NoticeComponent;