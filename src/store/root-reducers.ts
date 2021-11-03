import { combineReducers } from "redux"
import countReducer from "./reducers"

export const rootReducer = combineReducers({
    count: countReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer
