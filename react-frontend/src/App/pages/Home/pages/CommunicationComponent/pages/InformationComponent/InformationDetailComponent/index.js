import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../../../components/Title"
import Bar from "../../../../../components/Bar"
const cx = classnames.bind(css);

const moduleName = "InformationComponent";

class InformationComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: [
           
            ],
            prevData: [

            ],
            nextData: [

            ]
        };
      }
    componentDidMount () {
        var locationArray = window.location.href.split('/')
        axios.get('/information/'+locationArray[locationArray.length-1])
      .then(res => {
        const data = res.data;
        this.setState({data})
      })
      var prev =Number(locationArray[locationArray.length-1])-1 
        var next =Number(locationArray[locationArray.length-1])+1
        axios.get('/information/'+next)
        .then(res => {
            const nextData = res.data;
            this.setState({nextData})
        })
        axios.get('/information/'+prev)
        .then(res => {
            const prevData = res.data;
            this.setState({prevData})
        }) 
        document.documentElement.scrollTop = 0;
    }
    render() {
      return (
        <div className={cx(`${moduleName}`)}>
          <Bar />
          <Title 
            title="정보공유"
            url1="communication"
            url2="information"
            urlName1="소통 공간"
            urlName2="정보공유"/>
            {/* <div className={cx(`${moduleName}-search`)}>
                <div className={cx(`${moduleName}-search-container`)}>
                    <input type="text" placeholder="검색어를 입력해주세요." />
                </div>
            </div> */}
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
                                <td>{post.title}</td>
                                <td>{post.file}</td>
                                <td>{post.date}</td>
                                <td>{post.writer}</td>
                                <td>{post.view}</td>
                            </tr>
                        )}
                        {this.state.data.map((post) =>
                            <tr>
                                <td colspan="6">테스트</td>
                            </tr>
                        )}
                         <tr>
                            <td colspan="6" className={cx(`${moduleName}-next-prev`)}>
                              이전 글: {this.state.prevData.length===0?"이전 글이 없습니다.":this.state.prevData.map((post)=><a href={`/communication/information/${post.no}`}>{post.title}</a>)}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" className={cx(`${moduleName}-next-prev`)}>
                            다음 글: {this.state.nextData.length===0?"다음 글이 없습니다.":this.state.nextData.map((post)=><a href={`/communication/information/${post.no}`}>{post.title}</a>)}
                            </td>
                        </tr>
                    
                    </table>
                </div>
                <div className={cx(`${moduleName}-content-button`)}>
                  <Link to="/communication/information"><button>목록보기</button></Link>
                </div>
            </div>

        </div>
      )
    }
}
export default InformationComponent;