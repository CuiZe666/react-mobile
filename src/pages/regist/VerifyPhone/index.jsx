import React, { Component } from "react";
import { NavBar, Icon, WingBlank, InputItem, Toast, Modal } from "antd-mobile";
import { createForm } from "rc-form";
// 引入样式
import "./index.css";
// 验证手机号是否被注册过的请求
import { reqVerifyPhone } from "@api/regist";
import { reqSendCode } from "@api/login";
// 引入封装好的滑块按钮组件
import VerifyButton from "@components/VerifyButton";
class VerifyPhone extends Component {
  state = {
    isDisabled: true, // 控制按钮禁用
  };
  componentDidMount() {
    // Modal.alert(
    //   "注册协议及隐私政策",
    //   <span className="policy-text">
    //     在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
    //     <strong className="policy-strong-text">
    //       请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）
    //     </strong>
    //     ：<span className="policy-content">《硅谷用户注册协议》</span>
    //     <span className="policy-content">《硅谷隐私政策》</span>
    //   </span>,
    //   [
    //     {
    //       text: "不同意",
    //       onPress: () => console.log("cancel"),
    //     },
    //     { text: "同意", style: { backgroundColor: "red", color: "#fff" } },
    //   ]
    // );
  }
  // 当用户输入数据时就会触发
  // 表单验证
  // value为表单输入的值
  validator = (rule, value, callback) => {
    // console.log(rule, value);
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57]|199)[0-9]{8}$/;
    let isDisabled = true;

    if (reg.test(value)) {
      isDisabled = false;
    }

    this.setState({
      isDisabled,
    });

    // callback必须调用，否则检验失败
    // callback(message) 校验失败
    // callback() 校验成功
    callback();
  };
  // 验证手机号是否被注册过
  VerifyPhone = async () => {
    try {
      // 获取单个表单项的值
      const phone = this.props.form.getFieldValue("phone");
      // 获取所有表单项的值
      // const value2 = this.props.form.getFieldsValue();
      const result = await reqVerifyPhone(phone);
      console.log(result, "lll");
      // 请求成功，手机号不存在
      // 接下来提示弹框确认短信验证码界面
      this.sendCode(phone);
    } catch (error) {
      // 轻提示组件，手机号已存在，持续时间3s
      Toast.fail(error, 3);
    }
  };
  // 发送验证码
  sendCode = (phone) => {
    Modal.alert("", `我们将发送短信/语音验证码至：${phone}`, [
      {
        text: "取消",
        // onPress: () => console.log("cancel"),
      },
      {
        text: "确定",
        style: { backgroundColor: "red", color: "#fff" },
        onPress: async () => {
          // 发送请求 请求短信验证码
          const result = await reqSendCode(phone);
          console.log(result, "kkk");
          // 路由跳转
          this.props.history.push("/regist/verifycode");
        },
      },
    ]);
  };
  render() {
    const { isDisabled } = this.state;
    // form属性：由createForm高阶组件传递而来(校验方法)
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          硅谷注册
        </NavBar>
        {/* 两翼留白 */}
        <WingBlank>
          <div className="verify-phone-input">
            {/* 文本输入框 */}
            <InputItem
              placeholder="请输入手机号"
              //   函数的返回值展开
              // rules为表单的校验规则
              {...getFieldProps("phone", {
                // 表单校验规则
                rules: [{ validator: this.validator }],
              })}
              clear
            >
              <div className="verify-phone-prefix">
                <span>+86</span>
                <Icon type="down" />
              </div>
            </InputItem>
          </div>
          {/* <Button
            id="TencentCaptcha"
            data-appid="2015187501"
            data-cbfn="verifyCallback"
            type="warning"
            className="warning-btn"
            disabled={isDisabled}
            onClick={this.VerifyPhone}
          >
            下一步
          </Button> */}
          {/* 用我们封装的滑块按钮组件 */}
          <VerifyButton
            disabled={isDisabled}
            callback={this.VerifyPhone}
            btnText="下一步"
          />
        </WingBlank>
      </div>
    );
  }
}
// createForm是高阶组件：给VerifyPhone传递操作表单form对象
export default createForm()(VerifyPhone);
