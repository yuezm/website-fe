/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;

  const jsonp = app.jsonp();

  router.resources('mind', '/api/mind', jsonp, controller.mind);
};
