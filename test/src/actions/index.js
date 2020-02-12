const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => ( {
    type: INCREMENT
} )

export const decrement = () => ( {
    type: DECREMENT
} )

// actionを定義してactionをreturnする、view側でイベントを行った時、適切な状態繊維を実行させるための仕組み
