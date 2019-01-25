import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import storeFactory from './store/storeFactory'
import { Provider } from 'react-redux'


const store = storeFactory();

window.React = React;
window.store = store;

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
