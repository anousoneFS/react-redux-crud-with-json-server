export enum ActionsType {
    GET_USERS = "getUser",
    ADD = "addUser",
    DELETE_USER = "DELETE_USER",
}

export interface UsersType {
    name: string
    email: string
    contract: string
    address: string
    action: boolean
    id: number
}
