import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Toast } from "antd-mobile";
// 服务端验证的请求
import { reqVerifycode } from "@api/common";
export default class VerifyButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired, // 是否禁用
    callback: PropTypes.func.isRequired, //  验证手机号码是否被注册过的函数
    btnText: PropTypes.string.isRequired, // 文本内容
  };
  componentDidMount() {
    // 在window上挂载verifyCallback验证回调函数
    window.verifyCallback = async (res) => {
      // console.log(res, "lllll");
      // 如果res.ret为0的话代表验证通过
      if (res.ret === 0) {
        try {
          // 客户端验证通过还要去服务端验证，服务端的验证需要发请求
          await reqVerifycode(res.randstr, res.ticket);
          // 服务端验证通过后再去验证手机号有没有被注册过,调用了验证手机号是否被注册过的函数
          this.props.callback();
          console.log("验证全部通过");
        } catch (e) {
          console.log("验证失败");
          Toast.fail(e, 3);
        }
      }
    };
  }
  render() {
    const { disabled, btnText } = this.props;
    return (
      <>
        {/* 禁用状态下显示*/}
        <Button
          style={{ display: disabled ? "block" : "none" }}
          className="warning-btn"
          type="warning"
          disabled
        >
          {btnText}
        </Button>
        {/* 未禁用的状态下显示 */}
        <Button
          style={{ display: !disabled ? "block" : "none" }}
          id="TencentCaptcha"
          data-appid="2015187501"
          data-cbfn="verifyCallback"
          type="warning"
          className="warning-btn"
        >
          {btnText}
        </Button>
      </>
    );
  }
}

// export default function VerifyButton({ disabled, callback }) {
// 相当于componentDidMount
// useEffect(() => {
//   window.verifyCallback = async function (res) {
//   //     console.log(res);
//   //     if (res.ret === 0) {
//   //       // 服务端验证
//   //       await reqVerifyCode(res.randstr, res.ticket);
//   //       // 做其他事
//   //       callback();
//   //     }
//   //   };
//   // }, [callback]);

//   // window.verifyCallback = async function (res) {
//   //   console.log(res);

//   //   if (res.ret === 0) {
//   //     // 服务端验证
//   //     await reqVerifyCode(res.randstr, res.ticket);
//   //     // 做其他事
//   //     callback();
//   //   }
//   // };

//   return (
//     <>
//       <Button
//         style={{ display: disabled ? "block" : "none" }}
//         className="warning-btn"
//         type="warning"
//         disabled
//       >
//         下一步
//       </Button>
//       <Button
//         style={{ display: !disabled ? "block" : "none" }}
//         id="TencentCaptcha"
//         data-appid="2074282032"
//         data-cbfn="verifyCallback"
//         className="warning-btn"
//         type="warning"
//       >
//         下一步
//       </Button>
//     </>
//   );
// }
