/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    security: {
      domainWhiteList: ['http://127.0.0.1:9001'],
      csrf: {
        enable: false,
        headerName: 'x-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
    },
    cors: {
      // origin: '*',
      // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1706444401093_6128';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
