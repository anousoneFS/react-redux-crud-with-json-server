import React from "react"
import Home from "./pages/Home"
import AddUser from "./pages/AddUser"
import { Switch, Route } from "react-router-dom"
import "./App.css"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add-user" component={AddUser} />
            </Switch>
        </div>
    )
}

export default App
