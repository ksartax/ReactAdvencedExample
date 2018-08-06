import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.PureComponent {
    state = {
        searchValue: ''
    }

    doSearch = debounce(() => {
        this.props.articleActions.setSearchValue(this.state.searchValue);
    }, 300);

    handleSearch = (event) => {
        this.setState({ 
            searchValue: event.target.value 
        }, () => {
            this.doSearch();
        })
    }

    render() {
        return (
            <input 
                type="search"
                placeholder="Enter search term"
                value={this.state.searchValue}
                onChange={this.handleSearch}
            />
        )
    }
}

export default SearchBar;