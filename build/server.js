'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _server = require('./renderer/server');

var _server2 = _interopRequireDefault(_server);

var _testData = require('./testData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.set('view engine', 'ejs');

app.get('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const initialContent = yield (0, _server2.default)();
    res.render('index', _extends({}, initialContent));
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

app.get('/data', (req, res) => {
  res.send(_testData.data);
});

app.listen(_config2.default.port, function listenHandler() {
  console.info(`Running on ${_config2.default.port}...`);
});