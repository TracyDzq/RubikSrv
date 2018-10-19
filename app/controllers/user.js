const xss = require('xss');
const mongoose = require('mongoose');
const User = mongoose.model('User');

/**
 * 注册新用户
 * @param {Function} next          [description]
 * @yield {[type]}   [description]
 */
exports.reg = async (ctx, next) => {
  let phone = xss(parseInt(ctx.request.body.phone.trim()));
  let passport = xss(ctx.request.body.passport.trim());
  let { nickname, avatar } = ctx.request.body;
  let user = await User.findOne({
    phone: phone
  }).exec();
  if (!user) {
    user = new User({
      phone: phone,
      passport: passport,
      nickname,
      avatar
    });
  } else {
    return (ctx.body = {
      success: false,
      msg: '用户已存在'
    });
  }
  try {
    user = await user.save();
    return (ctx.body = {
      success: true,
      msg: '添加成功'
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      msg: '系统未知异常'
    });
  }
};
