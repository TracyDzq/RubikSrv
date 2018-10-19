// 用于封装controllers的公共方法

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = mongoose.model('User');

exports.hasBody = async (ctx, next) => {
  var body = ctx.request.body || {};
  if (Object.keys(body).length === 0) {
    return (ctx.body = {
      success: false,
      msg: '参数缺失'
    });
  }
  await next();
};

// 检验token
exports.hasToken = async (ctx, next) => {
  if (!user) {
    ctx.body = {
      success: false,
      err: '用户没登陆'
    };

    return next;
  }

  ctx.session = ctx.session || {};
  ctx.session.user = user;

  await next();
};
