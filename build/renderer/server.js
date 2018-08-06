'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _index = require('../state-api/lib/index');

var _index2 = _interopRequireDefault(_index);

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const serverRender = (() => {
    var _ref = _asyncToGenerator(function* () {
        const resp = yield _axios2.default.get(`http://${_config2.default.host}:${_config2.default.port}/data`);
        const store = new _index2.default(resp.data);

        return {
            initialMarkup: _server2.default.renderToString(_react2.default.createElement(_App2.default, { store: store })),
            initialData: resp.data
        };
    });

    return function serverRender() {
        return _ref.apply(this, arguments);
    };
})();

exports.default = serverRender;