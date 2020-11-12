// 引入组件
import VerifyPhone from "@pages/regist/VerifyPhone";
import VerifyCode from "@pages/regist/VerifyCode";
// 路由的配置文件
const routes = [
  {
    path: "/regist/verifyPhone",
    component: VerifyPhone,
  },
  {
    path: "/regist/verifycode",
    component: VerifyCode,
  },
];
export default routes;
