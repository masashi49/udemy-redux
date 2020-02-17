import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREAT_EVENTS = 'CREAT_EVENTS'
export const DELETE_EVENTS = 'DELETE_EVENTS'

export const increment = () => ( {
    type: INCREMENT
} )

export const decrement = () => ( {
    type: DECREMENT
} )

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// リクエストを投げる時、promiseが帰るのでasyncで処理を待つってからdispatchへ渡す
//actionで関数を返すために、redux-thunkが必要となるので、createStore時に渡しておく必要がある。
export const readEvents = () => async dispatch => {
    const response = await axios.get( `${ ROOT_URL }/events${ QUERYSTRING }` )
    dispatch( { type: READ_EVENTS, response } )
}

export const postEvent = values => async dispatch => {
    const response = await axios.post( `${ ROOT_URL }/events${ QUERYSTRING }`, values )
    dispatch( { type: CREAT_EVENTS, response } )
}

export const getEvent = id => async dispatch => {
    const response = await axios.get( `${ ROOT_URL }/events/${ id }${ QUERYSTRING }` )
    dispatch( { type: READ_EVENT, response } )
}

// deleteイベントを追加
export const deleteEvent = id => async dispatch => {
    await axios.delete( `${ ROOT_URL }/events/${ id }${ QUERYSTRING }` )
    dispatch( { type: DELETE_EVENTS, id } )
}

// actionを定義してactionをreturnする、view側でイベントを行った時、適切な状態繊維を実行させるための仕組み
