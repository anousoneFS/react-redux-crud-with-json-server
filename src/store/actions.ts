import { ActionType, Actions } from "./types"
import { Dispatch } from "redux"

//* between action & reducer
const setIncrement = (payload: number): Actions => ({
    type: ActionType.INCREMENT,
    payload: payload,
})

//* between action & reducer
const setDecremetn = (payload: number): Actions => ({
    type: ActionType.DECREMENT,
    payload: payload,
})

//* between action & reducer
const reset = (): Actions => ({
    type: ActionType.RESET,
    payload: 0,
})

//! ---------------------------------------

//* between UI & action
export const Increment = (payload: number) => {
    return function (dispatch: Dispatch<Actions>) {
        dispatch(setIncrement(payload))
    }
}

//* between UI & action
export const Decrement = (payload: number) => {
    return function (dispatch: Dispatch<Actions>) {
        dispatch(setDecremetn(payload))
    }
}

//* between UI & action
export const Reset = () => {
    return function (dispatch: Dispatch<Actions>) {
        dispatch(reset())
    }
}
