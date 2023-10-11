import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import thunk from "redux-thunk";

import {UsersReducer} from "../users/reducers"
import {CommentsReducer} from "../comments/reducers"
import {TitlesReducer} from "../titles/reducers"
import {LikesReducer} from "../likes/reducers"


export default function createStore() {
  return reduxCreateStore( // reduxのcreateStoreメソッドの別名
    combineReducers({
      users: UsersReducer,
      comments: CommentsReducer,
      titles: TitlesReducer,
      likes: LikesReducer,
    }),
    applyMiddleware(
      thunk
    )
  )
}
