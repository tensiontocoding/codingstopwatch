import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { createStore } from 'redux'; // 스토어생성
import reducers from './reducers'; // 리듀서함수
import { Provider } from 'react-redux'; // Store -> connect() -> Component 불러다 사용

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

