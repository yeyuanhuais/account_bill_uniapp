/**
 * uni-request请求封装
 * 1. 统一配置接口地址
 * 2. 统一设置超时时间/报文格式/报文加密
 * 3. 统一身份认证
 * 4. 统一处理登录超时/接口异常提示
 * 5. 统一返回接口格式
 * code: number
  success: boolean
  msg: string
  result: any
 */

const request = (config) => {
  let url;
  if (/^(http|https):\/\/.*/.test(config.url)) {
    // 如果是以http/https开头的则不添加VITE_REQUEST_BASE_URL
    url = config.url;
  } else {
    url = `https://mock.apifox.cn/m1/2307480-0-default${config.url}`;
  }
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      url,
      /** 统一设置超时时间 */
      timeout: config.timeout || 60000,
      header: {
        ...config.header,
        /** 统一报文格式 */
        "Content-Type": "application/json;charset=UTF-8",
        /** 统一身份认证 */
        apifoxToken: "36cGPDPyQYnoqCoc6QwaId20qGz4kF7U",
      },
      success(res) {
        // 200状态码表示成功
        if (res.statusCode === 200 && res?.data?.code === "0") {
          resolve(res.data.data);
          return;
        }
        /**
         * 这里可以做一些登录超时/接口异常提示等处理
         */
        reject(res.data);
        uni.showToast({ title: "失败", mask: true, icon: "error" });
      },
      fail(result) {
        reject(result);
        uni.showToast({ title: "失败", mask: true, icon: "error" });
      },
    });
  });
};

export default {
  /**
   * get请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  get: (url, data, options) => {
    return request({
      ...options,
      url,
      data,
      method: "GET",
    });
  },
  /**
   * post请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  post: (url, data, options) => {
    return request({
      ...options,
      url,
      data,
      method: "POST",
    });
  },
};
