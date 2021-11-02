import { Dispatch } from "redux"
import axios from "axios"
import { ActionsType } from "./actionType"

interface getUser {
    type: ActionsType.GET_USERS
    payload: number
}

interface Add {
    type: ActionsType.ADD_USER
    payload: number
}

interface delUser {
    type: ActionsType.DELETE_USER
}

interface delUser {
    type: ActionsType.DELETE_USER
}
interface getSingle {
    type: ActionsType.GET_SINGLE_USER
}
interface update {
    type: ActionsType.UPDATE_USER
}

export type Action = getUser | Add | delUser | getSingle | update

const getUsers = (user: any) => ({
    type: ActionsType.GET_USERS,
    payload: user,
})

const userDeleted = (id: any) => ({
    type: ActionsType.DELETE_USER,
    payload: id,
})

const userAdded = (user: any) => ({
    type: ActionsType.ADD_USER,
    payload: user,
})

const getSingleUser2 = (data: any) => ({
    type: ActionsType.GET_SINGLE_USER,
    payload: data,
})

const userUpdate2 = () => ({
    type: ActionsType.UPDATE_USER,
    payload: 0,
})
// async function getData(url: string, dispatch: Dispatch<Action>) {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log("mydata = ", data)
//     dispatch(getUsers(data))
//     return
// }
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

export const addUser = (user: any) => {
    return function (dispatch: Dispatch<Action>) {
        axios
            .post(`http://localhost:5000/user`, user)
            .then((resp) => {
                console.log("resp = ", resp.data)
                dispatch(userAdded(user))
            })
            .catch((error) => console.log(error))
    }
}

export const getSingleUser = (id: any) => {
    return function (dispatch: Dispatch<Action>) {
        axios
            .get(`http://localhost:5000/user/${id}`)
            .then((resp) => {
                console.log("resp = ", resp.data)
                dispatch(getSingleUser2(resp.data))
            })
            .catch((error) => console.log(error))
    }
}

export const updateUser = (user: any, id: any) => {
    return function (dispatch: Dispatch<Action>) {
        axios
            .put(`http://localhost:5000/user/${id}`, user)
            .then((resp) => {
                console.log("resp = ", resp.data)
                dispatch(userUpdate2())
            })
            .catch((error) => console.log(error))
    }
}
