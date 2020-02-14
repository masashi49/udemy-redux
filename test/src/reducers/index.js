// アプリケーション内に存在するreducersを結合する

import { combineReducers } from 'redux'
import count from "./count"
import { reducer as form } from 'redux-form'

export default combineReducers( {
    count,
    form
    // foo,bar,buz
} )
