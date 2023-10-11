import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import thunk from "redux-thunk";

import {UsersReducer} from "../users/reducers"

export default function createStore() {
  return reduxCreateStore( // reduxのcreateStoreメソッドの別名
    combineReducers({ // 分割したReducersをまとめる
      users: UsersReducer, // stateのカテゴリ毎、オブジェクトをreturnする（stateのデータ構造）
    }),
    applyMiddleware(
      thunk
    )
  )
}
