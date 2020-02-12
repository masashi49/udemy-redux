// アプリケーション内に存在するreducersを結合する

import { CombineReducers } from 'redux'
import count from "./count"

export default CombineReducers( {
    count,
    // foo,bar,buz
} )
