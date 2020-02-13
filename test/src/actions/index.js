import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const READ_EVENTS = 'READ_EVENTS'

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

// actionを定義してactionをreturnする、view側でイベントを行った時、適切な状態繊維を実行させるための仕組み
