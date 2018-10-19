var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    phone: {
      unique: true,
      required: true,
      type: Number
    },
    passport: {
      required: true,
      type: String
    },
    email: String,
    nickname: String,
    avatar: {
      type: String,
      default:
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1212473563,2299523089&fm=27&gp=0.jpg'
    },
    createAt: {
      type: Date
    },
    updateAt: {
      type: Date
    }
  },
  { versionKey: false }
);

// Defines a pre hook for the document.
UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now();
  } else {
    this.updateAt = Date.now();
  }
  next();
});

/**
 * 定义模型User
 * 模型用来实现我们定义的模式，调用mongoose.model来编译Schema得到Model
 * @type {[type]}
 */
// 参数User 数据库中的集合名称, 不存在会创建.
var User = mongoose.model('User', UserSchema);

module.exports = User;
