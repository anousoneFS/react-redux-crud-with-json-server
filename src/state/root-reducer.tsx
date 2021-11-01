import { combineReducers } from "redux"
import usersReducers from "./reducer"

export const rootReducer = combineReducers({
    data: usersReducers,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer
