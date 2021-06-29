
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {  Router } from 'react-router-dom';
import Store from './_helpers/Store';
import {history as bHistory} from './_helpers/history'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Router history={bHistory}>
                <App />
            </Router>
        </Provider> 
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
