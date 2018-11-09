import React, { Component } from "react";
import classnames from "classnames/bind";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Bar from "./components/Bar";
import Footer from "./components/Footer";
import routes from "./routes";
import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "Home";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Header />
        <Bar />
        <Switch>
          {routes.map(({ ...routeProps }) => (
            <Route {...routeProps} key={routeProps.path || ""} />
          ))}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
