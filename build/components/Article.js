'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeProvider = require('./storeProvider');

var _storeProvider2 = _interopRequireDefault(_storeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const style = {
    article: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
    data: {
        fontSize: '0.85em',
        color: '#888'
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10
    },
    body: {
        paddingLeft: 20
    }
};

const dataDisplay = dataString => new Date(dataString).toDateString();

const Article = props => {
    const { article, author } = props;

    return _react2.default.createElement(
        'div',
        { style: style.article },
        _react2.default.createElement(
            'div',
            { style: style.title },
            ' ',
            article.title,
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: style.date },
            ' ',
            dataDisplay(article.date),
            ' '
        ),
        _react2.default.createElement(
            'div',
            { style: style.author },
            _react2.default.createElement(
                'a',
                { href: author.website },
                author.firstName,
                ' ',
                author.lastName
            )
        ),
        _react2.default.createElement(
            'div',
            { style: style.body },
            ' ',
            article.body,
            ' '
        )
    );
};

Article.PropTypes = {
    article: _propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        body: _propTypes2.default.string.isRequired,
        data: _propTypes2.default.string.isRequired
    })
};

function extraProps(store, originalProps) {
    return {
        author: store.articleActions.lookupAuthor(originalProps.article.authorId)
    };
}

exports.default = (0, _storeProvider2.default)(extraProps)(Article);