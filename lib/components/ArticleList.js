import React from 'react';

import Article from './Article';

class ArticleList extends React.PureComponent {
    render() {
        return (
            <div> 
                {Object.values(this.props.articles).map(article => (
                    <table>
                        <tr> 
                            <td> 
                                <Article 
                                    key={article.id}
                                    article={article}
                                />
                            </td>
                            <td> 
                                <button data-id={article.id} > Kasuj </button>
                            </td>
                        </tr>
                    </table>    
                ))}
            </div>
        )
    }
}

export default ArticleList;