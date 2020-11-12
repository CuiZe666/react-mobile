// 服务端验证的请求
import request from "@utils/request";

// 当前公共请求地址前缀
const url_prefix = "/common";

export const reqVerifycode = (randStr, ticket) => {
  return request({
    method: "POST",
    url: `${url_prefix}/verifycode`,
    data: {
      randStr,
      ticket,
    },
  });
};
