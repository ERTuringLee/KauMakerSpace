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
                <div className={cx(`${moduleName}-login-register`)}>
                  <Link to="/login">
                    <img src={loginIcon} alt="logIn"/>
                  </Link>
                  <Link to="/register">
                    <img src={registerIcon } alt="register"/>
                  </Link>
                </div>
            </div>
        )
    }
}
export default Header;