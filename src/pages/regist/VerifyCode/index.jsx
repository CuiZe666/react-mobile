import React, { Component } from "react";
import { NavBar, Icon, WingBlank, InputItem, Button } from "antd-mobile";

import msg from "./msg.png";
import "./index.css";

export default class VerifyCode extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon className="left" type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          硅谷注册
        </NavBar>
        <WingBlank>
          <img className="verify-code-msg" src={msg} alt="msg" />
          <p className="verify-code-tip">
            我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
          </p>
          <div className="verify-code-container">
            <InputItem placeholder="请输入手机验证码" />
            <Button className="verify-code-btn">获取验证码</Button>
          </div>
          <Button type="warning" disabled className="warning-btn">
            下一步
          </Button>
          <span className="verify-code-question">
            遇到问题?请<a href="##">联系客服</a>
          </span>
        </WingBlank>
      </div>
    );
  }
}
