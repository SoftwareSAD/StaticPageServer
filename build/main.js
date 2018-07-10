require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._queryRouter = exports._encryptedPWD = exports._flipPage = exports._dbSuccess = exports._dbError = undefined;

var _crypto = __webpack_require__(3);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = __webpack_require__(18).console(); // console追踪库
var md5 = _crypto2.default.createHash('md5');

/**
 * @desc mongodb 操作成功函数,返回到前端
 * @errorCode 错误代码
 * */
async function _dbSuccess(res, msg, data, errorCode) {
  return res.json({
    msg: msg || '操作成功',
    data: data || [],
    errorCode: errorCode || 0
  });
}
/**
 * @desc mongodb 操作失败函数
 * @errorCode 错误代码
 * */
function _dbError(res, msg, data, errorCode) {
  return res.json({
    msg: msg || '服务端错误',
    data: data || [],
    errorCode: errorCode || 1
  });
}

/**
 * @desc mongodb 分页函数
 * @errorCode
 * @{total总条数,pageTotal总页数,pageNumber当前页数}
 * */
async function _flipPage(res, data, errorCode, msg, _ref) {
  var totals = _ref.totals,
      pages = _ref.pages,
      pageCurrent = _ref.pageCurrent;

  return res.json({
    errorCode: errorCode || 0,
    data: data || [],
    msg: msg || '操作成功',
    totals: totals,
    pages: pages,
    pageCurrent: pageCurrent
  });
}

/**
 * @desc 密码加密模块
 * */
function _encryptedPWD(password) {
  return md5.update(password).digest('hex');
}

/**
 * @desc 查询路由名称
 * */
async function _queryRouter(req, res, next) {
  var findRouter = await RouterModel.find(req);
  return findRouter;
}

exports._dbError = _dbError;
exports._dbSuccess = _dbSuccess;
exports._flipPage = _flipPage;
exports._encryptedPWD = _encryptedPWD;
exports._queryRouter = _queryRouter;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @desc db config
 * */
module.exports.config = {
  url: 'mongodb://heygrandpa:SYSU2018@ds117691.mlab.com:17691/maoyanmovie', // 普通不授权模式链接mongodb
  domain: 'mlab.com', // 主域名
  scheme: 'mongodb', // 协议
  database: 'mlab.com', // 数据库名称
  username: 'heygrandpa', // 管理员用户名称
  password: 'SYSU2018' // 管理员密码


  /**
   * @desc InitAdmin
   * */
};module.exports.InitAdmin = {
  username: 'admin', // 管理员用户昵称
  password: 'admin', // 管理员密码
  // nickname: 'admin', // 昵称
  email: 'admin@vsorg.com', // email
  cellphone: '13711111111', // phone
  portrait: '../assets/img/logo/login-default-portrait.png' // 头像


  /**
   *@desc 短信发送
   */
};module.exports.SMS = {
  smsapi: "api.smsbao.com",
  user: "susie", // 短信平台账号
  password: "smsbaoshiwojia13" // 短信平台密码
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
/**
 * @desc 影院表
 */
var cinemaSchema = new Schema({
  id: String,
  cinema_name: String, //电影院名字
  district: String, //区
  online_moive: Array, //上映电影的图片地址
  address: String, //电影院地址
  telephone: String, //电话
  img_url: String //电影院的图片地址
});

/**
 * @desc构建表模型
 */
var CinemaModel = _mongoose2.default.model('cinema', cinemaSchema, 'cinema');

exports.default = CinemaModel;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _nuxt = __webpack_require__(11);

var _api = __webpack_require__(12);

var _api2 = _interopRequireDefault(_api);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _vue = __webpack_require__(27);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
var eventBus = new _vue2.default();
var app = (0, _express2.default)();
app.set('port', port);
app.use(_bodyParser2.default.json());
app.use('/api', _api2.default);
app.set("eventBus", eventBus);

// Import and Set Nuxt.js options
var config = __webpack_require__(28);
config.dev = !("development" === 'production');

async function start() {
  // Init Nuxt.js
  var nuxt = new _nuxt.Nuxt(config);
  // Build only in dev mode
  if (config.dev) {
    var builder = new _nuxt.Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console
}
start();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _smsverity = __webpack_require__(13);

var _smsverity2 = _interopRequireDefault(_smsverity);

var _movie = __webpack_require__(16);

var _movie2 = _interopRequireDefault(_movie);

var _cinema = __webpack_require__(19);

var _cinema2 = _interopRequireDefault(_cinema);

var _users = __webpack_require__(20);

var _users2 = _interopRequireDefault(_users);

var _news = __webpack_require__(24);

var _news2 = _interopRequireDefault(_news);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**@desc db options*/
var options = {
  user: _config.config.username,
  pass: _config.config.password,
  keepAlive: true
};
_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(_config.config.url, options);

var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, '数据库连接失败:'));
db.once('open', function () {
  console.log('数据库已连接');
});

/**用户注册登录选择*/
router.use(_users2.default);

/**手机注册验证*/
router.use(_smsverity2.default);

/**处理电影页面*/
router.use(_movie2.default);

/**处理影院页面*/
router.use(_cinema2.default);

/**处理资讯页面*/
router.use(_news2.default);

exports.default = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = __webpack_require__(3);

var _crypto2 = _interopRequireDefault(_crypto);

var _http = __webpack_require__(14);

var _http2 = _interopRequireDefault(_http);

var _querystring = __webpack_require__(15);

var _querystring2 = _interopRequireDefault(_querystring);

var _config = __webpack_require__(4);

var _express = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

//config
var smsapi = _config.SMS.smsapi;
var user = _config.SMS.user;
var password = _config.SMS.password;
var md5 = _crypto2.default.createHash('md5');

function statusStr(result) {
  switch (result) {
    case '0':
      console.log('短信发送成功');
      break;
    case '-1':
      console.log('参数不全');
      break;
    case '-2':
      console.log('服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！');
      break;
    case '30':
      console.log('密码错误');
      break;
    case '40':
      console.log('账户不存在');
      break;
    case '41':
      console.log('余额不足');
      break;
    case '42':
      console.log('账户已过期');
      break;
    case '43':
      console.log('IP地址限制');
      break;
    case '50':
      console.log('内容含有敏感字');
      break;
  }
}

router.post('/sms', async function (req, res, next) {
  var smscontent = "尊敬的用户，您的注册验证码为" + req.body.code;
  var phone = req.body.cellphone;
  var pass = md5.update(password).digest('hex');
  var data = {
    'u': user,
    'p': pass,
    'm': phone,
    'c': smscontent
  };
  var content = _querystring2.default.stringify(data);
  var options = {
    hostname: smsapi,
    path: '/sms?' + content,
    method: 'GET'
    //创建请求
  };var request = _http2.default.request(options, function (response) {
    response.setEncoding('utf-8');
    response.on('data', function (result) {
      statusStr(result);
    });
    response.on('end', function () {});
  });
  request.on('error', function (err) {
    console.error(err);
  });
  request.end();
  return res.json({ code: req.body.code });
});

exports.default = router;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movies = __webpack_require__(17);

var _movies2 = _interopRequireDefault(_movies);

var _function = __webpack_require__(2);

var _express = __webpack_require__(0);

var _cinema = __webpack_require__(5);

var _cinema2 = _interopRequireDefault(_cinema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/**
 * @desc 拉取首页正在热映电影列表函数
 * @param 无
 * @return 返回前10个热映电影
 * */

router.get('/getHomeHotMovies', async function (req, res, next) {
  console.log('########获取前10个热映电影#########');
  var page_length = 10; // 获取前10个
  var MoviesArr = await _movies2.default.find({ online_time: { $regex: '2018-06' } }).exec();
  var findMovies = [];
  var YiArr = []; // 单位：亿
  var WanArr = []; // 单位：万
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = MoviesArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _item2 = _step.value;

      var movie_price = _item2.movie_total_price;
      if (movie_price.indexOf('亿') != -1) {
        var YiStr = _item2.movie_total_price.split('亿')[0];
        var YiNum = Number(YiStr);
        YiArr.push(YiNum);
      } else if (movie_price.indexOf('万') != -1) {
        var WanStr = _item2.movie_total_price.split('万')[0];
        var WanNum = Number(WanStr);
        WanArr.push(WanNum);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function compare(value1, value2) {
    return value2 - value1;
  }
  YiArr.sort(compare);
  // console.log(YiArr)
  WanArr.sort(compare);
  // console.log(WanArr)
  for (var i = 0; i < page_length; i++) {
    if (i < YiArr.length) {
      var price = String(YiArr[i]) + '亿';
      console.log(price);
      var Arr = await _movies2.default.find({ movie_total_price: price, online_time: { $regex: '2018-06' } }).exec();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var ob = JSON.parse(JSON.stringify(item));
          findMovies.push(ob);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } else {
      var _price = String(WanArr[i - YiArr.length]) + '万';
      var _Arr = await _movies2.default.find({ movie_total_price: _price, online_time: { $regex: '2018-06' } }).exec();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = _Arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _item = _step3.value;

          var _ob = JSON.parse(JSON.stringify(_item));
          findMovies.push(_ob);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }
  for (var i = 0; i < findMovies.length; i++) {
    console.log(findMovies[i].movie_total_price);
  }
  return (0, _function._dbSuccess)(res, '获取热映电影成功', findMovies);
});

/**
 * @desc 拉取首页待上映电影列表函数
 * @param 无
 * @return 返回前8个待上映电影
 * */

router.get('/getHomeReadyMovies', async function (req, res, next) {
  console.log('########获取前8个待上映电影#########');
  var page_length = 8; // 获取前8个
  var MoviesArr = await _movies2.default.find({ movie_total_price: '暂无' }).limit(page_length).exec();
  var findMovies = [];
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = MoviesArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var item = _step4.value;

      var ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return (0, _function._dbSuccess)(res, '获取待上映电影成功', findMovies);
});

/**
 * @desc 获取单个电影信息的函数
 * @param name: 电影中文名
 * @return 电影对象
 * */
router.get("/getSingleFilm", async function (req, res, next) {
  var name = req.query.name;
  console.log('########拉取电影-' + name + '#########');
  _movies2.default.find({ movie_name: name }).then(function (resDb) {
    return (0, _function._dbSuccess)(res, '获取电影成功', resDb);
  }).catch(function (err) {
    return (0, _function._dbError)(res, err);
  });
});

/**
 * @desc 获取单个电影信息的函数
 * @param src: 电影图片链接
 * @return 电影对象
 * */
router.get("/getFilmByImg", async function (req, res, next) {
  var img = req.query.src;
  console.log('########通过图片链接' + img + '拉取电影#########');
  if (img.indexOf('@') != -1) {
    img = img.split('@')[0];
  }
  _movies2.default.find({ img: { $regex: img, $options: 'i' } }).then(function (resDb) {
    return (0, _function._dbSuccess)(res, '获取电影成功', resDb);
  }).catch(function (err) {
    return (0, _function._dbError)(res, err);
  });
});

/**
 * @desc 根据电影类型查询电影
 * @param key: 电影类型
  currentPage: 当前是第几页
 * @return 返回30个电影
 * */

router.get('/getMoviesByType', async function (req, res, next) {
  console.log('########根据电影类型查询电影#########');
  var page_length = 30; // 获取30个
  var key = req.query.type;
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  if (key == '全部') {
    var MoviesArr = await _movies2.default.find({}).limit(page_length).skip(count).exec();
    var findMovies = [];
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = MoviesArr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var item = _step5.value;

        var ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', findMovies);
  } else {
    var _MoviesArr = await _movies2.default.find({ movie_type: { $regex: key } }).limit(page_length).skip(count).exec();
    var _findMovies = [];
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = _MoviesArr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _item3 = _step6.value;

        var _ob2 = JSON.parse(JSON.stringify(_item3));
        _findMovies.push(_ob2);
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies);
  }
});

/**
 * @desc 根据国家查询电影
 * @param   country: 国家
        currentPage: 当前是第几页
 * @return 返回30个电影
 * */

router.get('/getMoviesByCountry', async function (req, res, next) {
  console.log('########根据国家查询电影#########');
  var page_length = 30; // 获取30个
  var key = req.query.country;
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  if (key == '全部') {
    var MoviesArr = await _movies2.default.find({}).limit(page_length).skip(count).exec();
    var findMovies = [];
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = MoviesArr[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var item = _step7.value;

        var ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', findMovies);
  } else if (key == '日韩') {
    var _MoviesArr2 = await _movies2.default.find({ $or: [{ country: { $regex: '日本' } }, { country: { $regex: '韩国' } }] }).limit(page_length).skip(count).exec();
    // let MoviesArr = await MovieModel.find({country: {$or:['日本', '韩国']}}).limit(page_length).skip(count).exec();
    var _findMovies2 = [];
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = _MoviesArr2[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _item4 = _step8.value;

        var _ob3 = JSON.parse(JSON.stringify(_item4));
        _findMovies2.push(_ob3);
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8.return) {
          _iterator8.return();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies2);
  } else if (key == '欧洲') {
    var _MoviesArr3 = await _movies2.default.find({ $or: [{ country: { $regex: '法国' } }, { country: { $regex: '意大利' } }, { country: { $regex: '西班牙' } }] }).limit(page_length).skip(count).exec();
    // let MoviesArr = await MovieModel.find({country: {$or:['法国', '意大利', '西班牙']}}).limit(page_length).skip(count).exec();
    var _findMovies3 = [];
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = _MoviesArr3[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var _item5 = _step9.value;

        var _ob4 = JSON.parse(JSON.stringify(_item5));
        _findMovies3.push(_ob4);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies3);
  } else if (key == '其他') {
    var _MoviesArr4 = await _movies2.default.find({ $or: [{ country: { $regex: '泰国' } }, { country: { $regex: '俄罗斯' } }, { country: { $regex: '澳大利亚' } }, { country: { $regex: '伊朗' } }] }).limit(page_length).skip(count).exec();
    // let MoviesArr = await MovieModel.find({country: {$or:['泰国', '俄罗斯', '澳大利亚', '伊朗']}}).limit(page_length).skip(count).exec();
    var _findMovies4 = [];
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
      for (var _iterator10 = _MoviesArr4[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var _item6 = _step10.value;

        var _ob5 = JSON.parse(JSON.stringify(_item6));
        _findMovies4.push(_ob5);
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion10 && _iterator10.return) {
          _iterator10.return();
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies4);
  } else {
    if (key == '大陆') {
      key = '大陆';
    }
    var _MoviesArr5 = await _movies2.default.find({ country: { $regex: key } }).limit(page_length).skip(count).exec();
    var _findMovies5 = [];
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      for (var _iterator11 = _MoviesArr5[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        var _item7 = _step11.value;

        var _ob6 = JSON.parse(JSON.stringify(_item7));
        _findMovies5.push(_ob6);
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11.return) {
          _iterator11.return();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies5);
  }
});

/**
 * @desc 根据时间查询电影
 * @param   online_time: 上映时间
            currentPage: 当前是第几页
 * @return 返回30个电影
 * */

router.get('/getMoviesByDate', async function (req, res, next) {
  console.log('########根据时间查询电影#########');
  var page_length = 30; // 获取30个
  var key = req.query.online_time;
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  if (key == '全部') {
    var MoviesArr = await _movies2.default.find({}).limit(page_length).skip(count).exec();
    var findMovies = [];
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = MoviesArr[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var item = _step12.value;

        var ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob);
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12.return) {
          _iterator12.return();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', findMovies);
  } else if (key == '2018') {
    var _MoviesArr6 = await _movies2.default.find({ online_time: { $regex: key } }).limit(page_length).skip(count).exec();
    var _findMovies6 = [];
    var _iteratorNormalCompletion13 = true;
    var _didIteratorError13 = false;
    var _iteratorError13 = undefined;

    try {
      for (var _iterator13 = _MoviesArr6[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
        var _item8 = _step13.value;

        var _ob7 = JSON.parse(JSON.stringify(_item8));
        _findMovies6.push(_ob7);
      }
    } catch (err) {
      _didIteratorError13 = true;
      _iteratorError13 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion13 && _iterator13.return) {
          _iterator13.return();
        }
      } finally {
        if (_didIteratorError13) {
          throw _iteratorError13;
        }
      }
    }

    return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies6);
  } else if (key == '2011-2017') {
    for (var year = 2011; year <= 2017; year++) {
      var _MoviesArr7 = await _movies2.default.find({ online_time: { $regex: String(year) } }).limit(page_length).skip(count).exec();
      var _findMovies7 = [];
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = _MoviesArr7[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var _item9 = _step14.value;

          var _ob8 = JSON.parse(JSON.stringify(_item9));
          _findMovies7.push(_ob8);
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14.return) {
            _iterator14.return();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }

      return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies7);
    }
  } else if (key == '2000-2010') {
    for (var year = 2000; year <= 2010; year++) {
      var _MoviesArr8 = await _movies2.default.find({ online_time: { $regex: String(year) } }).limit(page_length).skip(count).exec();
      var _findMovies8 = [];
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = _MoviesArr8[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var _item10 = _step15.value;

          var _ob9 = JSON.parse(JSON.stringify(_item10));
          _findMovies8.push(_ob9);
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15.return) {
            _iterator15.return();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }

      return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies8);
    }
  } else if (key == '90年代') {
    for (var year = 1990; year < 2000; year++) {
      var _MoviesArr9 = await _movies2.default.find({ online_time: { $regex: String(year) } }).limit(page_length).skip(count).exec();
      var _findMovies9 = [];
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = _MoviesArr9[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var _item11 = _step16.value;

          var _ob10 = JSON.parse(JSON.stringify(_item11));
          _findMovies9.push(_ob10);
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16.return) {
            _iterator16.return();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies9);
    }
  } else if (key == '80年代') {
    for (var year = 1980; year < 1990; year++) {
      var _MoviesArr10 = await _movies2.default.find({ online_time: { $regex: String(year) } }).limit(page_length).skip(count).exec();
      var _findMovies10 = [];
      var _iteratorNormalCompletion17 = true;
      var _didIteratorError17 = false;
      var _iteratorError17 = undefined;

      try {
        for (var _iterator17 = _MoviesArr10[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
          var _item12 = _step17.value;

          var _ob11 = JSON.parse(JSON.stringify(_item12));
          _findMovies10.push(_ob11);
        }
      } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion17 && _iterator17.return) {
            _iterator17.return();
          }
        } finally {
          if (_didIteratorError17) {
            throw _iteratorError17;
          }
        }
      }

      return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies10);
    }
  } else if (key == '70年代') {
    for (var year = 1970; year < 1980; year++) {
      var _MoviesArr11 = await _movies2.default.find({ online_time: { $regex: String(year) } }).limit(page_length).skip(count).exec();
      var _findMovies11 = [];
      var _iteratorNormalCompletion18 = true;
      var _didIteratorError18 = false;
      var _iteratorError18 = undefined;

      try {
        for (var _iterator18 = _MoviesArr11[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
          var _item13 = _step18.value;

          var _ob12 = JSON.parse(JSON.stringify(_item13));
          _findMovies11.push(_ob12);
        }
      } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion18 && _iterator18.return) {
            _iterator18.return();
          }
        } finally {
          if (_didIteratorError18) {
            throw _iteratorError18;
          }
        }
      }

      return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies11);
    }
  } else if (key == '更早') {
    for (var year = 1900; year < 1970; year++) {
      var _MoviesArr12 = await _movies2.default.find({ online_time: { $regex: String(year) } }).limit(page_length).skip(count).exec();
      var _findMovies12 = [];
      var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = _MoviesArr12[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var _item14 = _step19.value;

          var _ob13 = JSON.parse(JSON.stringify(_item14));
          _findMovies12.push(_ob13);
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19.return) {
            _iterator19.return();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }

      return (0, _function._dbSuccess)(res, '获取电影成功', _findMovies12);
    }
  }
});

/**
 * @desc 按照热度对电影排序：只对2018年的电影排序，热度用票房衡量
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getHotSortedMovies', async function (req, res, next) {
  console.log('########按照热度对电影排序#########');
  var page_length = 30; // 获取30个
  var page = req.query.currentPage;
  console.log(page);
  var count = (page - 1) * page_length;
  var MoviesArr = await _movies2.default.find({ online_time: { $regex: '2018' } }).exec();
  var findMovies = [];
  var YiArr = []; // 单位：亿
  var WanArr = []; // 单位：万
  var _iteratorNormalCompletion20 = true;
  var _didIteratorError20 = false;
  var _iteratorError20 = undefined;

  try {
    for (var _iterator20 = MoviesArr[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
      var _item16 = _step20.value;

      var movie_price = _item16.movie_total_price;
      if (movie_price.indexOf('亿') != -1) {
        var YiStr = _item16.movie_total_price.split('亿')[0];
        var YiNum = Number(YiStr);
        YiArr.push(YiNum);
      } else if (movie_price.indexOf('万') != -1) {
        var WanStr = _item16.movie_total_price.split('万')[0];
        var WanNum = Number(WanStr);
        WanArr.push(WanNum);
      }
    }
  } catch (err) {
    _didIteratorError20 = true;
    _iteratorError20 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion20 && _iterator20.return) {
        _iterator20.return();
      }
    } finally {
      if (_didIteratorError20) {
        throw _iteratorError20;
      }
    }
  }

  function compare(value1, value2) {
    return value2 - value1;
  }
  YiArr.sort(compare);
  WanArr.sort(compare);
  var storeMovie = [];
  for (var i = 0; i < YiArr.length + WanArr.length; i++) {
    if (i < YiArr.length) {
      var price = String(YiArr[i]) + '亿';
      var Arr = await _movies2.default.find({ movie_total_price: price }).exec();
      var _iteratorNormalCompletion21 = true;
      var _didIteratorError21 = false;
      var _iteratorError21 = undefined;

      try {
        for (var _iterator21 = Arr[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
          var item = _step21.value;

          var ob = JSON.parse(JSON.stringify(item));
          storeMovie.push(ob);
        }
      } catch (err) {
        _didIteratorError21 = true;
        _iteratorError21 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion21 && _iterator21.return) {
            _iterator21.return();
          }
        } finally {
          if (_didIteratorError21) {
            throw _iteratorError21;
          }
        }
      }
    } else {
      var _price2 = String(WanArr[i - YiArr.length]) + '万';
      var _Arr2 = await _movies2.default.find({ movie_total_price: _price2 }).exec();
      var _iteratorNormalCompletion22 = true;
      var _didIteratorError22 = false;
      var _iteratorError22 = undefined;

      try {
        for (var _iterator22 = _Arr2[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
          var _item15 = _step22.value;

          var _ob14 = JSON.parse(JSON.stringify(_item15));
          storeMovie.push(_ob14);
        }
      } catch (err) {
        _didIteratorError22 = true;
        _iteratorError22 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion22 && _iterator22.return) {
            _iterator22.return();
          }
        } finally {
          if (_didIteratorError22) {
            throw _iteratorError22;
          }
        }
      }
    }
  }
  for (var i = count; i < count + page_length; i++) {
    findMovies.push(storeMovie[i]);
  }
  return (0, _function._dbSuccess)(res, '获取热映电影成功', findMovies);
});

/**
 * @desc 按照评价对电影排序：只对2018年的电影排序，评分作为衡量标准
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getEvalSortedMovies', async function (req, res, next) {
  console.log('########按照评价对电影排序#########');
  var page_length = 30; // 获取30个
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  var MoviesArr = await _movies2.default.find({ online_time: { $regex: '2018' } }).exec();
  var starArr = [];
  var findMovies = [];
  var _iteratorNormalCompletion23 = true;
  var _didIteratorError23 = false;
  var _iteratorError23 = undefined;

  try {
    for (var _iterator23 = MoviesArr[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
      var _item17 = _step23.value;

      var movie_star = _item17.movie_star;
      if (movie_star.indexOf('.') != -1) {
        var starNum = Number(movie_star); // 把评分转为数字
        starArr.push(starNum);
      }
    }
  } catch (err) {
    _didIteratorError23 = true;
    _iteratorError23 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion23 && _iterator23.return) {
        _iterator23.return();
      }
    } finally {
      if (_didIteratorError23) {
        throw _iteratorError23;
      }
    }
  }

  function compare(value1, value2) {
    return value2 - value1;
  }
  starArr.sort(compare);
  for (var i = count; i < count + page_length; i++) {
    var Arr = await _movies2.default.find({ movie_star: String(starArr[i]) }).exec();
    var _iteratorNormalCompletion24 = true;
    var _didIteratorError24 = false;
    var _iteratorError24 = undefined;

    try {
      for (var _iterator24 = Arr[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
        var item = _step24.value;

        var ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob);
      }
    } catch (err) {
      _didIteratorError24 = true;
      _iteratorError24 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion24 && _iterator24.return) {
          _iterator24.return();
        }
      } finally {
        if (_didIteratorError24) {
          throw _iteratorError24;
        }
      }
    }
  }
  return (0, _function._dbSuccess)(res, '获取高分电影成功', findMovies);
});

/**
 * @desc 按照时间对电影排序：对所有电影进行排序
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getOnlineSortedMovies', async function (req, res, next) {
  console.log('########按照时间对电影排序#########');
  var page_length = 30; // 获取30个
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  var MoviesArr = await _movies2.default.find({}).sort({ online_time: -1 }).exec();
  var findMovies = [];
  var _iteratorNormalCompletion25 = true;
  var _didIteratorError25 = false;
  var _iteratorError25 = undefined;

  try {
    for (var _iterator25 = MoviesArr[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
      var item = _step25.value;

      var ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob);
    }
  } catch (err) {
    _didIteratorError25 = true;
    _iteratorError25 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion25 && _iterator25.return) {
        _iterator25.return();
      }
    } finally {
      if (_didIteratorError25) {
        throw _iteratorError25;
      }
    }
  }

  return (0, _function._dbSuccess)(res, '获取时间排序电影成功', findMovies);
});

/**
 * @desc 获取经典影片：对所有电影排序，评分作为衡量标准
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getOldGoodMovies', async function (req, res, next) {
  console.log('########获取经典电影#########');
  var page_length = 30; // 获取30个
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  var MoviesArr = await _movies2.default.find({}).exec();
  var starArr = [];
  var findMovies = [];
  var _iteratorNormalCompletion26 = true;
  var _didIteratorError26 = false;
  var _iteratorError26 = undefined;

  try {
    for (var _iterator26 = MoviesArr[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
      var _item18 = _step26.value;

      var movie_star = _item18.movie_star;
      if (movie_star.indexOf('.') != -1) {
        var starNum = Number(movie_star); // 把评分转为数字
        starArr.push(starNum);
      }
    }
  } catch (err) {
    _didIteratorError26 = true;
    _iteratorError26 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion26 && _iterator26.return) {
        _iterator26.return();
      }
    } finally {
      if (_didIteratorError26) {
        throw _iteratorError26;
      }
    }
  }

  function compare(value1, value2) {
    return value2 - value1;
  }
  starArr.sort(compare);
  for (var i = count; i < count + page_length; i++) {
    var Arr = await _movies2.default.find({ movie_star: String(starArr[i]) }).exec();
    var _iteratorNormalCompletion27 = true;
    var _didIteratorError27 = false;
    var _iteratorError27 = undefined;

    try {
      for (var _iterator27 = Arr[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
        var item = _step27.value;

        var ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob);
      }
    } catch (err) {
      _didIteratorError27 = true;
      _iteratorError27 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion27 && _iterator27.return) {
          _iterator27.return();
        }
      } finally {
        if (_didIteratorError27) {
          throw _iteratorError27;
        }
      }
    }
  }
  return (0, _function._dbSuccess)(res, '获取经典高分电影成功', findMovies);
});

/**
 * @desc 获取指定顺序地区等限制的电影列表
 * @param sortID: 排序方式（热门、时间等）-> 按时间排序时让未上映电影排在前面
 *
 * @return 电影对象数组
 * */
router.get('/getFilmList', async function (req, res, next) {
  console.log('########获取指定限制的电影列表#########');
  //let currentPage = req.query.currentPage;  //当前页面
  var page_length = 30; // 每页30个
  var sortID = req.query.sortID; //排序方式
  var page = req.query.currentPage;
  //let count = (page - 1) * page_length;
  console.log(sortID);
  var findMovies = [];
  if (sortID == 1) {
    //console.log('Yes');
    var MoviesArr = await _movies2.default.find({ online_time: { $regex: '2018' } }).limit(page_length).exec();
    console.log(MoviesArr.length);

    var _iteratorNormalCompletion28 = true;
    var _didIteratorError28 = false;
    var _iteratorError28 = undefined;

    try {
      for (var _iterator28 = MoviesArr[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
        var item = _step28.value;

        var ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob);
      }
    } catch (err) {
      _didIteratorError28 = true;
      _iteratorError28 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion28 && _iterator28.return) {
          _iterator28.return();
        }
      } finally {
        if (_didIteratorError28) {
          throw _iteratorError28;
        }
      }
    }
  } else if (sortID == 2) {
    //console.log('Yes');
    var _MoviesArr13 = await _movies2.default.find({ movie_total_price: '暂无' }).limit(page_length).exec();
    console.log(_MoviesArr13.length);

    var _iteratorNormalCompletion29 = true;
    var _didIteratorError29 = false;
    var _iteratorError29 = undefined;

    try {
      for (var _iterator29 = _MoviesArr13[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
        var _item19 = _step29.value;

        var _ob15 = JSON.parse(JSON.stringify(_item19));
        findMovies.push(_ob15);
      }
    } catch (err) {
      _didIteratorError29 = true;
      _iteratorError29 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion29 && _iterator29.return) {
          _iterator29.return();
        }
      } finally {
        if (_didIteratorError29) {
          throw _iteratorError29;
        }
      }
    }
  } else if (sortID == 3) {
    //console.log('Yes');
    var _page_length = 30; // 获取30个
    var count = (page - 1) * _page_length;
    var _MoviesArr14 = await _movies2.default.find({ movie_star: { $lt: String(10) } }).collation({ "locale": "zh", numericOrdering: true }).sort({ movie_star: -1 }).limit(30).exec();
    console.log(_MoviesArr14.length);
    var _iteratorNormalCompletion30 = true;
    var _didIteratorError30 = false;
    var _iteratorError30 = undefined;

    try {
      for (var _iterator30 = _MoviesArr14[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
        var _item20 = _step30.value;

        var _ob16 = JSON.parse(JSON.stringify(_item20));
        findMovies.push(_ob16);
      }
    } catch (err) {
      _didIteratorError30 = true;
      _iteratorError30 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion30 && _iterator30.return) {
          _iterator30.return();
        }
      } finally {
        if (_didIteratorError30) {
          throw _iteratorError30;
        }
      }
    }
  } else {
    console.log('Yes');
    var _page_length2 = 30; // 获取30个
    var _count = (page - 1) * _page_length2;
    var _MoviesArr15 = await _movies2.default.find({ movie_name: { $regex: sortID } }).limit(_page_length2).exec();
    //let MoviesArr = await MovieModel.find({movie_star: {$regex: /^\d+(\.\d+)?$/}}).sort({movie_star: -1}).limit(60).exec()
    console.log(_MoviesArr15.length);
    var _iteratorNormalCompletion31 = true;
    var _didIteratorError31 = false;
    var _iteratorError31 = undefined;

    try {
      for (var _iterator31 = _MoviesArr15[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
        var _item21 = _step31.value;

        var _ob17 = JSON.parse(JSON.stringify(_item21));
        findMovies.push(_ob17);
      }
    } catch (err) {
      _didIteratorError31 = true;
      _iteratorError31 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion31 && _iterator31.return) {
          _iterator31.return();
        }
      } finally {
        if (_didIteratorError31) {
          throw _iteratorError31;
        }
      }
    }
  }
  // let MoviesArr = await MovieModel.find({}).limit(page_length).skip(10).exec();
  return (0, _function._dbSuccess)(res, '获取指定限制的电影列表', findMovies);
});

/**
 * @desc 根据所有条件查询电影
 * @param   online_time: 上映时间
                country: 国家
                   type: 电影类型
            currentPage: 当前是第几页
 * @return 返回30个电影
 * */

// 根据年份筛选
function searchByYear(inputArr, year) {
  var outputArr = [];
  var startYear = 1950;
  var endYear = 2025;
  if (year == '2018') {
    startYear = 2018;
    endYear = 2018;
  } else if (year == '2011-2017') {
    startYear = 2011;
    endYear = 2017;
    console.log(startYear);
  } else if (year == '2000-2010') {
    startYear = 2000;
    endYear = 2010;
  } else if (year == '90年代') {
    startYear = 1990;
    endYear = 1999;
  } else if (year == '80年代') {
    startYear = 1980;
    endYear = 1989;
  } else if (year == '70年代') {
    startYear = 1970;
    endYear = 1979;
  } else if (year == '更早') {
    startYear = 1950;
    endYear = 1969;
  }
  for (var i = 0; i < inputArr.length; i++) {
    for (var j = startYear; j <= endYear; j++) {
      if (inputArr[i].online_time.indexOf(String(j)) != -1) {
        outputArr.push(inputArr[i]);
        //console.log('Yes')
      }
    }
    console.log(inputArr);
  }
  return outputArr;
}

// 根据类型筛选
function searchByType(inputArr, type) {
  var outputArr = [];
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i].movie_type.indexOf(type) != -1) {
      outputArr.push(inputArr[i]);
    }
  }
  return outputArr;
}

// 根据国家筛选
function searchByCountry(inputArr, country) {
  console.log('国家');
  var outputArr = [];
  if (country == '全部') {
    for (var i = 0; i < inputArr.length; i++) {
      outputArr.push(inputArr[i]);
    }
  } else if (country == '美国') {
    for (var i = 0; i < inputArr.length; i++) {
      console.log('美国');
      if (inputArr[i].country.indexOf('美国') != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  } else if (country == '英国') {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('英国') != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  } else if (country == '大陆') {
    for (var i = 0; i < inputArr.length; i++) {
      console.log('大陆');
      if (inputArr[i].country.indexOf('大陆') != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  } else if (country == '日韩') {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('日本') != -1 || inputArr[i].country.indexOf('韩国') != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  } else if (country == '欧洲') {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('意大利') != -1 || inputArr[i].country.indexOf('西班牙') != -1 || inputArr[i].country.indexOf('德国') != -1 || inputArr[i].country.indexOf('波兰') != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  } else if (country == '其他') {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('泰国') != -1 || inputArr[i].country.indexOf('俄罗斯') != -1 || inputArr[i].country.indexOf('澳大利亚') != -1 || inputArr[i].country.indexOf('伊朗') != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  } else {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf(country) != -1) {
        outputArr.push(inputArr[i]);
      }
    }
  }
  console.log('Yes');
  console.log(outputArr.length);
  return outputArr;
}

router.get('/getMoviesByAll', async function (req, res, next) {
  console.log('########根据全部条件查询电影#########');
  var page_length = 30; // 获取30个
  var online_time = req.query.online_time;
  var country = req.query.country;
  var type = req.query.type;
  var page = req.query.currentPage;
  var count = (page - 1) * page_length;
  if (country == '全部') {
    // 根据上映时间和类型搜索
    var MoviesArr = await _movies2.default.find({ movie_type: { $regex: type } }).exec();
    var findMovies = searchByYear(MoviesArr, online_time);
    var result = [];
    for (var i = count; i < count + page_length && i < findMovies.length; i++) {
      var ob = JSON.parse(JSON.stringify(findMovies[i]));
      result.push(ob);
    }
    return (0, _function._dbSuccess)(res, '获取电影成功', result);
  } else if (online_time == '全部') {
    // 根据国家和类型搜索
    console.log('Yes');
    var _MoviesArr16 = await _movies2.default.find({ movie_type: { $regex: type } }).exec();
    console.log(_MoviesArr16.length);
    var _findMovies13 = searchByCountry(_MoviesArr16, country);
    console.log(_findMovies13.length);
    var _result = [];
    for (var i = count; i < count + page_length && i < _findMovies13.length; i++) {
      var _ob18 = JSON.parse(JSON.stringify(_findMovies13[i]));
      _result.push(_ob18);
    }
    return (0, _function._dbSuccess)(res, '获取电影成功', _result);
  } else if (type == '全部') {
    // 根据国家和上映时间搜索
    var _MoviesArr17 = await _movies2.default.find({ country: { $regex: country } }).exec();
    var _findMovies14 = searchByYear(_MoviesArr17, online_time);
    console.log(_findMovies14);
    var _result2 = [];
    for (var i = count; i < count + page_length && i < _findMovies14.length; i++) {
      var _ob19 = JSON.parse(JSON.stringify(_findMovies14[i]));
      _result2.push(_ob19);
    }
    return (0, _function._dbSuccess)(res, '获取电影成功', _result2);
  } else {
    // 根据国家、类型和上映时间搜索
    var MoviesArr1 = await _movies2.default.find({ movie_type: { $regex: type } }).exec(); // 按照类型的搜索结果
    var MoviesArr2 = searchByYear(MoviesArr1, online_time); // 按照时间、类型的搜索结果
    var _findMovies15 = searchByCountry(MoviesArr2, country); // 按照国家、时间、类型的搜索结果
    var _result3 = [];
    for (var i = count; i < count + page_length && i < _findMovies15.length; i++) {
      var _ob20 = JSON.parse(JSON.stringify(_findMovies15[i]));
      _result3.push(_ob20);
    }
    return (0, _function._dbSuccess)(res, '获取电影成功', _result3);
  }
});

exports.default = router;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

/**
 * @desc 电影表
 */

var movieSchema = new Schema({
  id: String,
  movie_name: String, //电影名
  movie_ename: String, //电影英文名
  country: String, //国家
  movie_type: String, //电影类型
  movie_time: String, //电影时长
  online_time: String, //上映时间
  movie_star: String, //用户评分
  movie_total_price: String, //票房
  img: String, //电影图片路径
  director: String, //导演，只有一个导演
  director_src: String, //导演图片
  actor: Array, //演员，有多个演员
  actor_src: Array, //演员图片
  introduction: String //电影简介
});

/**
 * @desc构建表模型
 */
var MovieModel = _mongoose2.default.model('movie', movieSchema, 'movie');

exports.default = MovieModel;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("tracer");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cinema = __webpack_require__(5);

var _cinema2 = _interopRequireDefault(_cinema);

var _express = __webpack_require__(0);

var _function = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/**
 * @desc 按照行政区搜索电影院
 * @param key：行政区的名字
 		 page: 当前是第几页
 * @return 返回10家电影院
 * */
router.get('/getCinemaByDistrict', async function (req, res, next) {
	console.log('########按照行政区搜索：获取10个电影院#########');
	var key = req.query.district;
	var page = req.query.currentPage;
	var page_length = 10; // 每一页有10个电影院
	var count = (page - 1) * page_length;
	if (key == '全部') {
		// 按照电影院名进行排序，-1为倒序
		var cinemaArr = await _cinema2.default.find({}).limit(page_length).skip(count).sort({ cinema_name: -1 }).exec();
		var findCinemas = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = cinemaArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				var ob = JSON.parse(JSON.stringify(item));
				findCinemas.push(ob);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', findCinemas);
	} else {
		var _cinemaArr = await _cinema2.default.find({ district: key }).limit(page_length).skip(count).exec();
		var _findCinemas = [];
		// console.log(cinemaArr)
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = _cinemaArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _item = _step2.value;

				var _ob = JSON.parse(JSON.stringify(_item));
				_findCinemas.push(_ob);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', _findCinemas);
	}
});

/**
 * @desc 按照品牌搜索电影院
 * @param key：品牌的名字
 		 page: 当前是第几页
 * @return 返回10家电影院
 * */
router.get('/getCinemaByBrand', async function (req, res, next) {
	console.log('########按照品牌搜索：获取10个电影院#########');
	var key = req.query.brand;
	var page = req.query.currentPage;
	var page_length = 10; // 每一页有10个电影院
	var count = (page - 1) * page_length;
	if (key == '全部') {
		// 按照电影院名进行排序，-1为倒序
		var cinemaArr = await _cinema2.default.find({}).limit(page_length).skip(count).sort({ cinema_name: -1 }).exec();
		var findCinemas = [];
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = cinemaArr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var item = _step3.value;

				var ob = JSON.parse(JSON.stringify(item));
				findCinemas.push(ob);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', findCinemas);
	} else {
		// 在电影院的名字中模糊搜索
		var brand = key.substring(0, 2);
		// console.log(brand)
		var _cinemaArr2 = await _cinema2.default.find({ cinema_name: { $regex: brand } }).limit(page_length).skip(count).sort({ cinema_name: -1 }).exec();
		// console.log(cinemaArr)
		var _findCinemas2 = [];
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = _cinemaArr2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _item2 = _step4.value;

				var _ob2 = JSON.parse(JSON.stringify(_item2));
				_findCinemas2.push(_ob2);
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', _findCinemas2);
	}
});

/**
 * @desc 按照影院名获取影院数据
 * @param cinemaName：影院名
 * @return 影院信息
 * */
router.get('/getCinemaByName', async function (req, res, next) {
	var cinemaName = req.query.cinemaName;
	console.log('########获取' + cinemaName + '数据#########');
	var cinemaArr = await _cinema2.default.find({ cinema_name: cinemaName }).exec();
	var findCinemas = [];
	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = cinemaArr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			var item = _step5.value;

			var ob = JSON.parse(JSON.stringify(item));
			findCinemas.push(ob);
		}
	} catch (err) {
		_didIteratorError5 = true;
		_iteratorError5 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion5 && _iterator5.return) {
				_iterator5.return();
			}
		} finally {
			if (_didIteratorError5) {
				throw _iteratorError5;
			}
		}
	}

	return (0, _function._dbSuccess)(res, '获取' + cinemaName + '数据成功', findCinemas[0]);
});

/**
 * @desc 按照品牌及行政区获取影院数据
 * @param district：行政区
             brand: 品牌
       currentpage: 当前第几页
 * @return 影院信息
 * */
router.get('/getCinemaByAll', async function (req, res, next) {
	var brand = req.query.brand;
	var district = req.query.district;
	var page = req.query.currentPage;
	var page_length = 10; // 每一页有10个电影院
	var count = (page - 1) * page_length;
	console.log('########按照全部搜索：获取10个电影院#########');
	if (brand == '全部' && district == '全部') {
		// 按照电影院名进行排序
		var cinemaArr = await _cinema2.default.find({}).limit(page_length).skip(count).sort({ cinema_name: -1 }).exec();
		var findCinemas = [];
		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {
			for (var _iterator6 = cinemaArr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var item = _step6.value;

				var ob = JSON.parse(JSON.stringify(item));
				findCinemas.push(ob);
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6.return) {
					_iterator6.return();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', findCinemas);
	} else if (district == '全部') {
		// 只通过品牌查询
		// 在电影院的名字中模糊搜索
		var _cinemaArr3 = await _cinema2.default.find({ cinema_name: { $regex: brand } }).limit(page_length).skip(count).sort({ cinema_name: -1 }).exec();
		var _findCinemas3 = [];
		var _iteratorNormalCompletion7 = true;
		var _didIteratorError7 = false;
		var _iteratorError7 = undefined;

		try {
			for (var _iterator7 = _cinemaArr3[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
				var _item3 = _step7.value;

				var _ob3 = JSON.parse(JSON.stringify(_item3));
				_findCinemas3.push(_ob3);
			}
		} catch (err) {
			_didIteratorError7 = true;
			_iteratorError7 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion7 && _iterator7.return) {
					_iterator7.return();
				}
			} finally {
				if (_didIteratorError7) {
					throw _iteratorError7;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', _findCinemas3);
	} else if (brand == '全部') {
		// 只通过行政区查询
		var _cinemaArr4 = await _cinema2.default.find({ district: district }).limit(page_length).skip(count).exec();
		var _findCinemas4 = [];
		var _iteratorNormalCompletion8 = true;
		var _didIteratorError8 = false;
		var _iteratorError8 = undefined;

		try {
			for (var _iterator8 = _cinemaArr4[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
				var _item4 = _step8.value;

				var _ob4 = JSON.parse(JSON.stringify(_item4));
				_findCinemas4.push(_ob4);
			}
		} catch (err) {
			_didIteratorError8 = true;
			_iteratorError8 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion8 && _iterator8.return) {
					_iterator8.return();
				}
			} finally {
				if (_didIteratorError8) {
					throw _iteratorError8;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', _findCinemas4);
	} else {
		var key = brand.substring(0, 2);
		// console.log("all: ")
		// console.log(key)
		var _cinemaArr5 = await _cinema2.default.find({ cinema_name: { $regex: key }, district: district }).limit(page_length).skip(count).exec();
		var _findCinemas5 = [];
		var _iteratorNormalCompletion9 = true;
		var _didIteratorError9 = false;
		var _iteratorError9 = undefined;

		try {
			for (var _iterator9 = _cinemaArr5[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
				var _item5 = _step9.value;

				var _ob5 = JSON.parse(JSON.stringify(_item5));
				_findCinemas5.push(_ob5);
			}
		} catch (err) {
			_didIteratorError9 = true;
			_iteratorError9 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion9 && _iterator9.return) {
					_iterator9.return();
				}
			} finally {
				if (_didIteratorError9) {
					throw _iteratorError9;
				}
			}
		}

		return (0, _function._dbSuccess)(res, '获取电影院成功', _findCinemas5);
	}
});

exports.default = router;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _function = __webpack_require__(2);

var _users = __webpack_require__(21);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(0);
var jwt = __webpack_require__(22);
var expressWebToken = __webpack_require__(23);

var router = express.Router();
var app = express();

var jwtSecret = 'super_secret';
var jwtExpire = '168h';

router.use(expressWebToken({
  requestProperty: "account",
  credentialsRequired: false,
  secret: jwtSecret
}));

router.use(function (req, res, next) {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

/**
 * @desc 用户登录
 * @param cellphone：手机号
 password: 密码
 * @return 返回 登陆信息
 * */
router.post('/login', async function (req, res, next) {
  console.log('########用户登录#########');
  var findUser = await _users2.default.find({ cellphone: req.body.cellphone }).exec();
  var checkPwd = findUser[0] ? findUser[0].password : '';
  var inputPwd = req.body.password;

  if (findUser.length === 0) {
    res.status(401).json({ message: '用户名或者密码错误' });
  } else {
    if (checkPwd === inputPwd) {
      var account = { id: 123, cellphone: req.body.cellphone };
      var token = jwt.sign(account, jwtSecret, {
        expiresIn: jwtExpire
      });
      return res.json({ cellphone: req.body.cellphone, token: token });
    } else {
      res.status(401).json({ message: '用户名或者密码错误' });
    }
  }
});

/**
 * @desc 用户注册
 * @param  username: 用户名
          cellphone：手机号
           password: 密码
 * @return 返回 注册信息
 * */
router.post('/register', async function (req, res, next) {
  console.log('########用户注册#########');
  cell = req.body.cellphone;
  var findUser = await _users2.default.find({ cellphone: cell }).exec();
  if (findUser.length != 0) {
    res.status(401).json({ message: '注册失败: 该手机号已注册' });
  }
  var newUser = new _users2.default({
    username: req.body.username,
    cellphone: req.body.cellphone,
    password: req.body.password
  });
  console.log('注册中');
  newUser.save(function (err) {
    if (err) {
      console.log('失败');
      res.status(401).json({ message: '注册失败' });
    } else {
      console.log('成功');
      return res.json({ cellphone: req.body.cellphone, username: req.body.username });
    }
  });
});

/**
 * @desc 删除用户
 * @param  cellphone：手机号
 * @return 返回 删除信息
 * */
router.post('/delete', async function (req, res, next) {
  console.log('########删除用户#########');
  var deleUser = { cellphone: req.body.cellphone };

  newUser.remove(deleUser, function (err) {
    if (err) {
      console.log('失败');
      res.status(401).json({ message: '删除失败' });
    } else {
      console.log('删除成功');
      return (0, _function._dbSuccess)(res, '删除用户成功');
    }
  });
});

router.get('/statistics', async function (req, res, next) {
  console.log("aaa:", req.account);
  return res.json([{ foo: 10 }, { bar: 20 }]);
});

// Mock Users
var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

exports.default = router;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

/**
 * @desc 用户表
 */
var usersSchema = new Schema({
  id: String,
  username: { type: String, default: "default-xxx" }, // 用户名
  password: { type: String }, // 密码
  email: { type: String, default: "" }, // email
  cellphone: { type: String }, // phone
  portrait: { type: String, default: "../../assets/img/logo/login-default-portrait.png" // 头像
  } });

/**
 * @desc构建表模型
 */
var UsersModel = _mongoose2.default.model('users', usersSchema, 'users');

exports.default = UsersModel;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _news = __webpack_require__(25);

var _news2 = _interopRequireDefault(_news);

var _videos = __webpack_require__(26);

var _videos2 = _interopRequireDefault(_videos);

var _function = __webpack_require__(2);

var _express = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/**
 * @desc 拉取新闻列表函数
 * @param page: int, 当前是第几页，规定每10个项为一页，共30页
 * @return 返回第n页的全部数据（返回一个数组，每个项为一个object）
 * */
router.get('/getAllNews', async function (req, res, next) {
	var page = req.query.currentPage;
	console.log('########拉取第' + page + '页资讯#########');
	if (!page) {
		(0, _function._dbError)(res);
		console.log('errror');
		return false;
	}
	var page_length = 10; // 每10项为一页
	var count = (page - 1) * page_length;
	var newsArr = await _news2.default.find({}).limit(page_length).skip(count).exec();
	var findNews = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = newsArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;

			var ob = JSON.parse(JSON.stringify(item));
			findNews.push(ob);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return (0, _function._dbSuccess)(res, '获取新闻成功', findNews);
});

/**
  * @desc 拉取热点资讯列表函数
  * @param 无
  * @return 返回前6项资讯
  * */

router.get('/getHotNews', async function (req, res, next) {
	console.log('########获取热点资讯#########');
	var page_length = 6; // 获取前6项资讯
	var newsArr = await _news2.default.find({}).limit(page_length).exec();
	var findNews = [];
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = newsArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var item = _step2.value;

			var ob = JSON.parse(JSON.stringify(item));
			findNews.push(ob);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return (0, _function._dbSuccess)(res, '获取最热新闻成功', findNews);
});

/**
  * @desc 拉取电影预告片列表函数
  * @param currentPage: int, 当前是第几页，规定每15个项为一页，共20页
  * @return 返回第n页的全部数据（返回一个数组，每个项为一个object）
  * */
router.get('/getAllVideos', async function (req, res, next) {
	var page = req.query.currentPage;
	console.log('########拉取第' + page + '页视频#########');
	if (!page) {
		(0, _function._dbError)(res);
		return false;
	}
	var page_length = 15; // 每10项为一页
	var count = (page - 1) * page_length;
	var videoArr = await _videos2.default.find({}).limit(page_length).skip(count).exec();
	var findVideo = [];
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = videoArr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var item = _step3.value;

			var ob = JSON.parse(JSON.stringify(item));
			findVideo.push(ob);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return (0, _function._dbSuccess)(res, '获取预告片成功', findVideo);
});

/**
  * @desc 拉取热点电影预告片列表函数
  * @param 无
  * @return 返回前6项最热电影预告片
  * */
router.get('/getHotVideos', async function (req, res, next) {
	console.log('########获取热点视频#########');
	var page_length = 6; // 获取前6项预告片
	var videoArr = await _videos2.default.find({}).limit(page_length).exec();
	var findVideo = [];
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = videoArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var item = _step4.value;

			var ob = JSON.parse(JSON.stringify(item));
			findVideo.push(ob);
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return (0, _function._dbSuccess)(res, '获取最热预告片成功', findVideo);
});

exports.default = router;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
/**
 * @desc 新闻表
 */
var newsSchema = new Schema({
  id: String,
  title: String, //新闻标题
  abstract: String, //新闻摘要
  article: String, //新闻内容
  cover_img_src: { type: String, default: "../../assets/img/7.jpg" }, //新闻封面图
  content_img_src: Array, //内容图片
  url: String, //新闻链接
  date: String, //新闻发布时间
  view_count: String //新闻浏览人数
});

/**
 * @desc构建表模型
 */
var NewsModel = _mongoose2.default.model('news', newsSchema, 'MaoYanNews');

exports.default = NewsModel;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

/**
 * @desc 视频表
 */
var videoSchema = new Schema({
  id: String,
  title: String, //视频标题
  cover_img_src: String, //视频封面图
  url: String, //视频链接
  view_count: String //视频播放人数
});

/**
 * @desc构建表模型
 */
var VideoModel = _mongoose2.default.model('videos', videoSchema, 'MaoYanVideos');

exports.default = VideoModel;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__(29);
var bodyParser = __webpack_require__(6);
module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: '%s | STAR MOVIE',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#FFFFFF' },

  css: ['~/assets/css/base.css', '~/assets/css/font-awesome/css/font-awesome.min.css'],

  modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt'],
  serverMiddleware: [bodyParser.json()],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3389',
    HOST: '127.0.0.1', //0.0.0.0/127.0.0.1
    PORT: '3000' //80/3000
  },

  build: {
    extractCSS: true,
    vendor: ['axios'],
    extend: function extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|json)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"name":"sad-project","version":"1.0.0","description":"My tremendous Nuxt.js project","author":"SAD","private":true,"scripts":{"dev":"backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production node build/main.js","generate":"nuxt generate","lint":"eslint --ext .js,.vue --ignore-path .gitignore .","precommit":"npm run lint","pm2build":"nuxt build && backpack build && npm start"},"dependencies":{"@nuxtjs/axios":"^5.0.0","body-parser":"^1.18.3","bootstrap":"^4.0.0-beta.2","bootstrap-vue":"^2.0.0-rc.11","crypto":"^1.0.1","dotenv":"^6.0.0","express":"^4.15.3","express-jwt":"^5.3.1","fs":"0.0.1-security","http":"0.0.0","jquery":"^3.3.1","js-cookie":"^2.2.0","jsonwebtoken":"^8.3.0","jwt-decode":"^2.2.0","mongoose":"^5.1.6","nuxt":"^1.0.0","tracer":"^0.9.0","vue":"^2.5.16","vue-baidu-map":"^0.21.10","vuelidate":"^0.7.4"},"devDependencies":{"babel-core":"^6.26.3","babel-eslint":"^8.2.1","babel-polyfill":"^6.26.0","babel-preset-es2015":"^6.24.1","backpack-core":"^0.7.0","cross-env":"^5.0.1","eslint":"^4.15.0","eslint-loader":"^2.0.0","eslint-plugin-vue":"^4.0.0","nodemon":"^1.11.0"}}

/***/ })
/******/ ]);
//# sourceMappingURL=main.map