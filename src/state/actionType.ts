export enum ActionsType {
    GET_USERS = "getUser",
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER",
    UPDATE_USER = "UPDATE_USER",
    GET_SINGLE_USER = "GET_SINGLE_USER",
}

export interface UsersType {
    name: string
    email: string
    contract: string
    address: string
    action: boolean
    id: number
}
