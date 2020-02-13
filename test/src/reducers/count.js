import { INCREMENT, DECREMENT, READ_EVENTS } from '../actions'

//初期状態のstateを設定
const initialState = {
    value: 10
}

// count reducer。他のファイルに渡したいのでexportする
// 引数は2つもつ、stateとaction
// 第一引数のstateはデフォルトでは状態を持っていないので、initialStateを渡してあげる
// actionのタイプによって処理を分岐させて返す
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        case READ_EVENTS:
            return state
        default:
            return state
    }

}
