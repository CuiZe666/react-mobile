import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
// 引入antd-mobile全局样式
import "antd-mobile/dist/antd-mobile.css";
// 引入全局的公共样式
import "./assets/css/common.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
