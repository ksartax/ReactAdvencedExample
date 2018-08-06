'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _ArticleList = require('./ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Timestamp = require('./Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// if (typeof window !== 'undefined') {
// window.Perf = Perf;
// }

// import Perf from 'react-addons-perf'

class App extends _react2.default.PureComponent {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.appState = () => {
            const { articles, searchValue } = this.props.store.getState();
            return { articles, searchValue };
        }, this.state = this.appState(), this.onStoreChange = () => {
            this.setState(this.appState());
        }, _temp;
    }

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.articleActions.startClock();

        // setImmediate(() => {
        //     Perf.start();
        // });
        // setTimeout(() => {
        //     Perf.stop();
        //     Perf.printDOM();
        // }, 5000)
    }

    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId);
    }

    render() {
        let { articles, searchValue } = this.state;
        if (searchValue) {
            articles = (0, _lodash2.default)(articles, value => {
                return value.title.match(searchValue) || value.body.match(searchValue);
            });
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Timestamp2.default, null),
            _react2.default.createElement(_SearchBar2.default, { articleActions: this.props.store.articleActions }),
            _react2.default.createElement(_ArticleList2.default, {
                articles: articles,
                articleActions: this.props.store.articleActions
            })
        );
    }
}App.childContextTypes = {
    store: _propTypes2.default.object
};
;

exports.default = App;