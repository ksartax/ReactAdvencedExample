import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

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
}

const dataDisplay = (dataString) => new Date(dataString).toDateString();

const Article = (props) => {
    const { article, author } = props;
    
    return (
        <div style={style.article}> 
            <div style={style.title}> {article.title} </div>
            <div style={style.date}> {dataDisplay(article.date)} </div>
            <div style={style.author}> 
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div style={style.body}> {article.body} </div>
        </div>
    );
}

Article.PropTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
    })
}

function extraProps(store, originalProps) {
    return {
        author: store.articleActions.lookupAuthor(originalProps.article.authorId)
    }
}

export default storeProvider(extraProps)(Article);