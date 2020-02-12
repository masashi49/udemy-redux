import { increment, decrement } from '../actions'

//初期状態のstateを設定
const initialState = {
    value: 0
}

// count reducer。他のファイルに渡したいのでexportする
// 引数は2つもつ、stateとaction
// 第一引数のstateはデフォルトでは状態を持っていないので、initialStateを渡してあげる
// actionのタイプによって処理を分岐させて返す
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case increment:
            return { value: state.value + 1 }

        case decrement:
            return { value: state.value - 1 }
        default:
            return state
    }

}
