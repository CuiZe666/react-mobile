import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 映入路由的配置文件
import routes from "./config/routes";
// import "./App.css";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route) => {
            return <Route {...route} key={route.path} />;
          })}
        </Switch>
      </Router>
    );
  }
}
