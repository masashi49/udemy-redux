// アプリケーション内に存在するreducersを結合する

import { combineReducers } from 'redux'
import count from "./count"

export default combineReducers( {
    count,
    // foo,bar,buz
} )
