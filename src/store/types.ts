export enum ActionType {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    RESET = "reset",
}

export type Actions = {
    type: ActionType.INCREMENT | ActionType.DECREMENT | ActionType.RESET
    payload: number
}
