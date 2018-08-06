class StateApi {
    constructor(data) {
        this.data = {
            articles: this.mapIntoObject(data.articles),
            authors: this.mapIntoObject(data.authors),
            searchValue: "",
            timestamp: new Date()
        };
        this.subscriptions = {};
        this.lastSubscriptionId = 1;
    }

    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        }
        this.notifySubscribers();
    }

    articleActions = {
        lookupAuthor: authorId => this.data.authors[authorId],
        setSearchValue: (searchValue) => {
            this.mergeWithState({
                searchValue
            })
        },
        startClock: () => {
            setInterval(() => {
              this.mergeWithState({
                timestamp: new Date(),
              });
            }, 1000);
        }
    }
    
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;

            return acc;
        }, {})
    }
    
    getState() {
        return this.data;
    }

    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;

        return this.lastSubscriptionId;
    }

    unsubscribe = (subscribtionId) => {
        delete this.lastSubscriptionId[subscribtionId];
    }

    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb());
    }

    setSearchValue = (searchValue) => {
        this.data.searchValue = searchValue;
    }
}

export default StateApi;