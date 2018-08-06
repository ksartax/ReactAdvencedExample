'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _index = require('../state-api/lib/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = new _index2.default(window.store);

_reactDom2.default.render(_react2.default.createElement(_App2.default, { store: store }), document.getElementById('root'));