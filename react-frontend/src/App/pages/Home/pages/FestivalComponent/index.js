import React, { Component } from "react";
import {Link} from "react-router-dom"

import classnames from "classnames/bind";

import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "FestivalComponent";

class FestivalComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title`)}>
          <div className={cx(`${moduleName}-title-text`)}>
            행사 안내
          </div>
          <div className={cx(`${moduleName}-title-category`)}>
          <Link to="/">HOME</Link> > <Link to="/festival">행사 안내</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FestivalComponent;
