import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Perf from 'react-addons-perf'

import pickBy from "lodash.pickby";

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

// if (typeof window !== 'undefined') {
    // window.Perf = Perf;
// }

class App extends React.PureComponent {
    static childContextTypes = {
        store: PropTypes.object
    };
    
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    appState = () => {
        const { articles, searchValue } = this.props.store.getState();
        return {articles, searchValue};
    }

    state = this.appState();

    onStoreChange = () => {
        this.setState(this.appState());
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
            articles = pickBy(articles, (value) => {
                return value.title.match(searchValue) || value.body.match(searchValue);
            })
        }

        return (
            <div> 
                <Timestamp />
                <SearchBar articleActions={this.props.store.articleActions}/>
                <ArticleList 
                    articles={articles}
                    articleActions={this.props.store.articleActions}
                />
            </div>
        );
    }
};

export default App;