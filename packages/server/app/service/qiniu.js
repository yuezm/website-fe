const { Service } = require('egg');
const qiniu = require('qiniu');
const HTTPException = require('../model/HTTPException');

const accessKey = 'mcYvqExFJcB3jmtbJGePixqpy3yU_hQ-8q7ohBh4';
const secretKey = 'n_bgTnp-Xd1sIN7QxixKvzQ4MjuhGqaKMTvKS3N6';
const domain = 'http://note.keven.work';

class HomeController extends Service {
  constructor(ctx) {
    super(ctx);

    this.bucketName = 'web-notes';
    this.mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    this.bucketManager = new qiniu.rs.BucketManager(this.mac);
    this.formUploader = new qiniu.form_up.FormUploader({});
  }

  list() {
    return new Promise((resolve, reject) => {
      this.bucketManager.listPrefix(this.bucketName, null, (e, res) => {
        if (e) {
          reject(new HTTPException(500, e));
        } else {
          resolve(res.items);
        }
      });
    });
  }

  privateDownloadUrl(fileName) {
    const deadline = parseInt(Date.now() / 1000) + 120; // 2分钟
    return this.bucketManager.privateDownloadUrl(domain, fileName, deadline);
  }

  publicDownloadUrl(fileName) {
    return new Promise((resolve, reject) => {
      this.bucketManager.publicDownloadUrl(this.bucketName, fileName, 60, (e, res) => {
        if (e) {
          reject(new HTTPException(500, e));
        } else {
          resolve(res);
        }
      });
    });
  }

  upload(fileName, stream) {
    const putPolicy = new qiniu.rs.PutPolicy({
      scope: this.bucketName,
    });
    const uploadToken = putPolicy.uploadToken(this.mac);
    return this.formUploader.putStream(uploadToken, fileName, stream);
  }
}

module.exports = HomeController;
