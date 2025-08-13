import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import {legacy_createStore as createStore} from 'redux'
import {Provider} from 'react-redux'
import {devToolsEnhancer} from '@redux-devtools/extension'
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './modules';

// 11번 만 바뀔 수 있고, 
const store = createStore(rootReducer, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
 // 보고 있는 경로를 호
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
