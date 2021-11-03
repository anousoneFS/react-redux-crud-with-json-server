import React from "react"
import Btn from "./Btn"
import { Provider } from "react-redux"
import store from "../store"

function BtnMain() {
    return (
        <Provider store={store}>
            <Btn />
        </Provider>
    )
}

export default BtnMain
