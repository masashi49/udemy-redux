import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //applyMiddleware ミドルウェアを使えるようにする
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'


//アプリ内で唯一のstore 全ての状態がここに集約する

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools( applyMiddleware( thunk ) ) : applyMiddleware( thunk )


const store = createStore( reducers, enhancer )

//どのコンポーネントでも参照できるようにするのがProvider

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Route path='/events/new' component={ EventsNew } />
                <Route path="/events/:id" component={ EventsShow } />
                <Route exact path='/' component={ EventsIndex } />
                <Route exact path='/events' component={ EventsIndex } />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
