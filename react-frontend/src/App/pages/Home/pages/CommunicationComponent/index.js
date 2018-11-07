import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import classnames from "classnames/bind";
import routes from "./routes";
import css from "./index.scss";
const cx = classnames.bind(css);

const moduleName = "CommunicationComponent";

class CommunicationComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
          {routes.map(({ ...routeProps }) => (
            <Route {...routeProps} key={routeProps.path || ""} />
          ))}
      </Switch>
    );
  }
}

export default CommunicationComponent;