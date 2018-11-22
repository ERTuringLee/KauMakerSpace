import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);

const moduleName = "ContainerComponent";

class ContainerComponent extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render () {
    return (
      <div className={cx(`${moduleName}`)}>
        <table>
          <tbody>
          <tr>
            <th width="10%">No</th>
            <th width="80%">제목</th>
            <th width="10%">작성일</th>
          </tr>
          {this.props.data.map((post) => <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.date}</td>
          </tr>)}
          {this.props.data.map((post) => <tr>
            <td colspan="6">
              <img src={post.url} alt="image"/><br />
              {post.content}
              테스트 테스트 테스트
            </td>
          </tr>)}
          <tr>
            <td colspan="6" className={cx(`${moduleName}-pagination`)}>
              이전 글: {this.props.prevData.length===0?"이전 글이 없습니다.":this.props.prevData.map((post)=><a href={`/communication/activity/${post.id}`}>{post.title}</a>)}
            </td>
          </tr>
          <tr>
            <td colspan="6" className={cx(`${moduleName}-pagination`)}>
              다음 글: {this.props.nextData.length===0?"다음 글이 없습니다.":this.props.nextData.map((post)=><a href={`/communication/activity/${post.id}`}>{post.title}</a>)}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
}
export default ContainerComponent 
