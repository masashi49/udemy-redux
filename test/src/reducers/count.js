import _ from 'lodash' // 配列に対して便利な機能を持つ 配列を任意のkeyとvalueのobjに

import { INCREMENT, DECREMENT, READ_EVENTS } from '../actions'

//初期状態のstateを設定
const initialState = {
    value: 10
}

// count reducer。他のファイルに渡したいのでexportする
// 引数は2つもつ、stateとaction
// 第一引数のstateはデフォルトでは状態を持っていないので、initialStateを渡してあげる
// actionのタイプによって処理を分岐させて返す
export default ( events = initialState, action ) => {
    switch ( action.type ) {
        case INCREMENT:
            return { value: events.value + 1 }
        case DECREMENT:
            return { value: events.value - 1 }
        case READ_EVENTS:
            return _.mapKeys( action.response.data, 'id' )
        default:
            return events
    }

}
