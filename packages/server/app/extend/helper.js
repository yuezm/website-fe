// 处理成功响应
module.exports = {
  success({ res = null, msg = '请求成功' }) {
    this.ctx.body = {
      code: 0,
      data: res,
      msg,
    };
    this.ctx.status = this.ctx.status || 200;
  },
};
