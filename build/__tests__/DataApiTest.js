'use strict';

var _DataApi = require('../DataApi');

var _DataApi2 = _interopRequireDefault(_DataApi);

var _testData = require('../testData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _DataApi2.default(_testData.data);

describe('DataApi', () => {
    it("zamiana articles json na object", () => {
        let articles = api.getArticles();
        let articleId = _testData.data.articles[0].id;
        let articleTitle = _testData.data.articles[0].title;

        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    });

    it("zamiana authors json na object", () => {
        let authors = api.getAuthors();
        let authorsId = _testData.data.authors[0].id;
        let authorsTitle = _testData.data.authors[0].title;

        expect(authors).toHaveProperty(authorsId);
        expect(authors[authorsId].title).toBe(authorsTitle);
    });
});