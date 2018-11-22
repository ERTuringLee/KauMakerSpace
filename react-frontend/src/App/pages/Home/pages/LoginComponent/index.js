import React, { Component } from "react";
import { Link } from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";
import Title from "../../components/Title"

const cx = classnames.bind(css);
const moduleName = "LoginComponent";

class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount () {
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div className={cx(`${moduleName}`)}>
                <Title 
                title="로그인"
                url1="login"
                url2=""
                urlName1="로그인"
                urlName2=""/>
                <div className={cx(`${moduleName}-content`)}>
                    <div className={cx(`${moduleName}-content-detail`)}>
                        <div className={cx(`${moduleName}-content-detail-id`)}>
                            아이디<br></br>
                            <input type="text"></input>
                        </div>
                        <div className={cx(`${moduleName}-content-detail-password`)}>
                            비밀번호<br></br>
                            <input type="password"></input>
                        </div>
                        <div className={cx(`${moduleName}-content-detail-button`)}>
                            <button>로그인</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginComponent;