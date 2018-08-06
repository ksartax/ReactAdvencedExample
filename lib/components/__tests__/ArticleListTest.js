import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';
import 'babel-polyfill'

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
    }

    let tree;

    beforeAll(() => {
        tree = renderer.create(
            <ArticleList 
                {...testProps}
            />
        ).toJSON();
    })

    it("poprawne renderowanie", () => {
        expect(tree).toMatchSnapshot();
    }) 
})