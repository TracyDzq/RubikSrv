const Router = require('koa-router');
const User = require('../app/controllers/user');
const checkToken = require('../app/controllers/app');
const App = require('../app/controllers/app');

module.exports = function() {
  var router = new Router({
    prefix: '/api'
  });
  router.post('/user/register', App.hasBody, User.reg); //注册
  // router.post('/user/login', UserCol.login); //登录
  // router.get('/user/allUsers', checkToken, UserCol.getAllUsers);
  // router.post('/user/del', checkToken, UserCol.delUser);

  return router;
};
