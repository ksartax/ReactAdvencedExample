import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import StateApi from '../state-api/lib/index';

const store = new StateApi(window.store);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));