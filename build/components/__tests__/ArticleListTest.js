'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleList = require('../ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ArticleList test', () => {
    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' }
        },
        articleActions: {
            lookupAuthor: jest.fn(() => ({})),
            remove: jest.fn(() => ({}))
        }
    };

    let tree;

    beforeAll(() => {
        tree = _reactTestRenderer2.default.create(_react2.default.createElement(_ArticleList2.default, testProps)).toJSON();
    });

    it("poprawne renderowanie", () => {
        expect(tree).toMatchSnapshot();
    });
});