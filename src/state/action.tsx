import { Dispatch } from "redux"
import axios from "axios"
import { ActionsType } from "./actionType"

interface getUser {
    type: ActionsType.GET_USERS
    payload: number
}

interface addUser {
    type: ActionsType.ADD
    payload: number
}

interface delUser {
    type: ActionsType.DELETE_USER
}

export type Action = getUser | addUser | delUser

const getUsers = (user: any) => ({
    type: ActionsType.GET_USERS,
    payload: user,
})

const userDeleted = (id: any) => ({
    type: ActionsType.DELETE_USER,
    payload: id,
})

// async function getData(url: string, dispatch: Dispatch<Action>) {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log("mydata = ", data)
//     dispatch(getUsers(data))
//     return
// }

// export const loadUsers = () => {
//     return function (dispatch: Dispatch<Action>) {
//         getData("http://localhost:5000/user", dispatch)
//     }
// }

export const loadUsers = () => {
    return function (dispatch: Dispatch<Action>) {
        axios
            .get("http://localhost:5000/user")
            .then((resp) => {
                console.log("resp = ", resp.data)
                dispatch(getUsers(resp.data))
            })
            .catch((error) => console.log(error))
    }
}

export const deleteUser = (id: string) => {
    return function (dispatch: Dispatch<Action>) {
        axios
            .delete(`http://localhost:5000/user/${id}`)
            .then((resp) => {
                console.log("resp = ", resp.data)
                dispatch(userDeleted(id))
            })
            .catch((error) => console.log(error))
    }
}
