import DataApi from '../DataApi';
import {data} from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
    it("zamiana articles json na object", () => {
        let articles = api.getArticles();
        let articleId = data.articles[0].id;
        let articleTitle = data.articles[0].title;
        
        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    }) 

    it("zamiana authors json na object", () => {
        let authors = api.getAuthors();
        let authorsId = data.authors[0].id;
        let authorsTitle = data.authors[0].title;
        
        expect(authors).toHaveProperty(authorsId);
        expect(authors[authorsId].title).toBe(authorsTitle);
    }) 
})