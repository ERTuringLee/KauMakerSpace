import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../../components/Title"
const cx = classnames.bind(css);

const moduleName = "InformationComponent";

class InformationComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {no:15, title:"스마트 팜 시스템 솔밸브 제어 코드", url:"/communication/information/15",file:"", date:"18.11.06", writer:"Turing", view:"66"},
                {no:14, title:"자작 휴대폰 케이스 도면", url:"/communication/information/14",file:"", date:"18.11.06", writer:"Erwin", view:"66"},
                {no:13, title:"창업동아리 SEED 부원 모집", url:"/communication/information/13",file:"", date:"18.11.06", writer:"Arthur", view:"66"},
                {no:12, title:"스마트 팜 시스템 솔밸브 제어 코드", url:"/communication/information/12",file:"", date:"18.11.06", writer:"Turing", view:"66"},
                {no:11, title:"자작 휴대폰 케이스 도면", url:"/communication/information/11",file:"", date:"18.11.06", writer:"Erwin", view:"66"},
                {no:10, title:"창업동아리 SEED 부원 모집", url:"/communication/information/10",file:"", date:"18.11.06", writer:"Arthur", view:"66"},
                {no:9, title:"스마트 팜 시스템 솔밸브 제어 코드", url:"/communication/information/9",file:"", date:"18.11.06", writer:"Turing", view:"66"},
                {no:8, title:"자작 휴대폰 케이스 도면", url:"/communication/information/8",file:"", date:"18.11.06", writer:"Erwin", view:"66"},
                {no:7, title:"창업동아리 SEED 부원 모집", url:"/communication/information/7",file:"", date:"18.11.06", writer:"Arthur", view:"66"},
                {no:6, title:"스마트 팜 시스템 솔밸브 제어 코드", url:"/communication/information/6",file:"", date:"18.11.06", writer:"Turing", view:"66"},
                {no:5, title:"자작 휴대폰 케이스 도면", url:"/communication/information/5",file:"", date:"18.11.06", writer:"Erwin", view:"66"},
                {no:4, title:"창업동아리 SEED 부원 모집", url:"/communication/information/4",file:"", date:"18.11.06", writer:"Arthur", view:"66"},
                {no:3, title:"스마트 팜 시스템 솔밸브 제어 코드", url:"/communication/information/3",file:"", date:"18.11.06", writer:"Turing", view:"66"},
                {no:2, title:"자작 휴대폰 케이스 도면", url:"/communication/information/2",file:"", date:"18.11.06", writer:"Erwin", view:"66"},
                {no:1, title:"창업동아리 SEED 부원 모집", url:"/communication/information/1",file:"", date:"18.11.06", writer:"Arthur", view:"66"}
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
            title="정보공유"
            url1="communication"
            url2="information"
            urlName1="소통 공간"
            urlName2="정보공유"/>
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
                                <td><Link to={`/communication/information/${post.no}`}>{post.title}</Link></td>
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
export default InformationComponent;