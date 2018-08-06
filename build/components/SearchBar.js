'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBar extends _react2.default.PureComponent {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            searchValue: ''
        }, this.doSearch = (0, _lodash2.default)(() => {
            this.props.articleActions.setSearchValue(this.state.searchValue);
        }, 300), this.handleSearch = event => {
            this.setState({
                searchValue: event.target.value
            }, () => {
                this.doSearch();
            });
        }, _temp;
    }

    render() {
        return _react2.default.createElement('input', {
            type: 'search',
            placeholder: 'Enter search term',
            value: this.state.searchValue,
            onChange: this.handleSearch
        });
    }
}

exports.default = SearchBar;