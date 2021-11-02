import { ActionsType } from "./actionType"
export const initialState = {
    users: [],
    user: {},
    loading: true,
}

interface ActionType {
    type: string
    payload: any
}

const usersReducers = (
    state: typeof initialState = initialState,
    action: ActionType
) => {
    switch (action.type) {
        case ActionsType.GET_USERS:
            return { ...state, users: action.payload, loading: false }
        case ActionsType.DELETE_USER:
        case ActionsType.ADD_USER:
            return {
                ...state,
                loading: false,
            }
        case ActionsType.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case ActionsType.UPDATE_USER:
        default:
            return state
    }
}

export default usersReducers
