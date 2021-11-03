import { ActionType, Actions } from "./types"

interface StateType {
    count: number
}

const initialState: StateType = {
    count: 0,
}

const countReducer = (state: StateType = initialState, action: Actions) => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return { ...state, count: state.count + action.payload }
        case ActionType.DECREMENT:
            return { ...state, count: state.count - action.payload }
        case ActionType.RESET:
            return { ...state, count: action.payload }
        default:
            return state
    }
}
export default countReducer
