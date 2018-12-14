import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../../components/Title";
import AdminBar from "../../../components/AdminBar";

const cx = classnames.bind(css);
const moduleName = 'RegisterManageComponent';

class RegisterManageComponent extends Component {
  constructor() {
    super();
    this.state = {
      data:[
        
      ],
      page:[],
      sessionData: []
    }
  }
  componentDidMount () {
    let self = this
    async function sessionCheck () {
      await axios.get('/session')
        .then(res => {
          const sessionData = res.data;
          self.setState({sessionData});
        })
      if (self.state.sessionData[0] === 'admin') {
        // await axios.get('/user')
        //   .then(res => {
        //     const data = res.data;
        //     self.setState({data})
        //   })
      } else if(self.state.sessionData[0] !== null) {
        window.location.href ='/'
      } else {
        window.location.href='/login'
      }
    }
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <AdminBar />
        <Title
          title="회원 관리"
          url1="admin/register"
          url2=""
          urlName1="회원 관리"
          urlName2=""/>
        <div className={cx(`${moduleName}-content`)}>
          <div className={cx(`${moduleName}-content-container`)}>
            <div className={cx(`${moduleName}-content-card`)}>
              <div className={cx(`${moduleName}-card-image`)}>
                <img src="" alt="카드이미지"/>
              </div>
              <div className={cx(`${moduleName}-card-description`)}>
                <div className={cx(`${moduleName}-card-description-content`)}>
                  <h5>이름: 이재문</h5>
                  <h5>성별: 남성</h5>
                  <h5>전화번호: 010-3024-6437</h5>
                  <h5>이메일: ehdspt@gmail.com</h5>
                  <h5>주소: 경기도 고양시 덕양구</h5>
                </div><br />
                <div className={cx(`${moduleName}-card-description-button`)}>
                  <button onClick={this.buttonClick} className={cx(`${moduleName}-card-description-button-apply`)} value="1">비밀번호 초기화</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterManageComponent;