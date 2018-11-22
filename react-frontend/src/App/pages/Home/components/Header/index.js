import React, { Component } from "react";
import { Link} from "react-router-dom";
import classnames from "classnames/bind";
import logo from 'src/App/pages/Home/assets/logo.png'
import loginIcon from 'src/App/pages/Home/assets/login.png'
import registerIcon from 'src/App/pages/Home/assets/register.png'
import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "Header";

class Header extends Component {
    render() {
        return (
            <div className={cx(`${moduleName}`)}>
                <div className={cx(`${moduleName}-logo`)}>
                  <Link to="/">
                    <img src={logo} alt="logo"/>
                  </Link>
                </div>
                {/* <div className={cx(`${moduleName}-login-register`)}>
                  <Link to="/login">
                    <div className={cx(`${moduleName}-login`)}>
                      <img src={loginIcon} alt="logIn"/>
                      <span>로그인</span>
                    </div>
                  </Link>
                  <Link to="/register">
                    <div className={cx(`${moduleName}-register`)}>
                      <img src={registerIcon } alt="register"/>
                      <span>회원가입</span>
                    </div>
                  </Link>
                </div> */}
            </div>
        )
    }
}
export default Header;