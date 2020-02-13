import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //applyMiddleware ミドルウェアを使えるようにする
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';

import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';


//アプリ内で唯一のstore 全ての状態がここに集約する
const store = createStore( reducers, applyMiddleware(thunk) )

console.log( store )
//どのコンポーネントでも参照できるようにするのがProvider

ReactDOM.render(
    <Provider store={ store }>
        <EventsIndex />
    </Provider>
    , document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
