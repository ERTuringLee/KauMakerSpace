import React, { Component } from "react";
import {Link} from "react-router-dom";

import classnames from "classnames/bind";

// import nameIcon from "src/App/pages/Home/assets/name.png"
import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "Title";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-text`)}>
          {this.props.title}
        </div>
        <div className={cx(`${moduleName}-category`)}>
          <Link to="/">HOME</Link> > <Link to={"/"+this.props.url1}>{this.props.urlName1}</Link>
          {this.props.url2!==""?`> `:''}
          {this.props.url2!==""?<Link to={"/"+this.props.url1+"/"+this.props.url2}>{this.props.urlName2}</Link>:''}
        </div>
      </div>
    )
  }
}
export default Title;