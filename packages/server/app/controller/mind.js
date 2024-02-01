const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.helper.success({
      res: await ctx.service.qiniu.list(),
    });
  }

  async show() {
    const { ctx } = this;
    ctx.helper.success({
      res: await ctx.service.qiniu.privateDownloadUrl(ctx.params.id),
    });
  }

  async create() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    console.log('stream', stream);
    console.log(ctx.body());
    // const res = await ctx.service.qiniu.upload(ctx.query.filename, stream);
    return [];
  }

  async update() {}
}

module.exports = HomeController;
