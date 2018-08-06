"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class StateApi {
    constructor(data) {
        this.mergeWithState = stateChange => {
            this.data = _extends({}, this.data, stateChange);
            this.notifySubscribers();
        };

        this.articleActions = {
            lookupAuthor: authorId => this.data.authors[authorId],
            setSearchValue: searchValue => {
                this.mergeWithState({
                    searchValue
                });
            },
            startClock: () => {
                setInterval(() => {
                    this.mergeWithState({
                        timestamp: new Date()
                    });
                }, 1000);
            }
        };

        this.subscribe = cb => {
            this.lastSubscriptionId++;
            this.subscriptions[this.lastSubscriptionId] = cb;

            return this.lastSubscriptionId;
        };

        this.unsubscribe = subscribtionId => {
            delete this.lastSubscriptionId[subscribtionId];
        };

        this.notifySubscribers = () => {
            Object.values(this.subscriptions).forEach(cb => cb());
        };

        this.setSearchValue = searchValue => {
            this.data.searchValue = searchValue;
        };

        this.data = {
            articles: this.mapIntoObject(data.articles),
            authors: this.mapIntoObject(data.authors),
            searchValue: "",
            timestamp: new Date()
        };
        this.subscriptions = {};
        this.lastSubscriptionId = 1;
    }

    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;

            return acc;
        }, {});
    }

    getState() {
        return this.data;
    }

}

exports.default = StateApi;