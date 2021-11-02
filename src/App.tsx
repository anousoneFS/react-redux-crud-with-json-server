import React from "react"
import Home from "./pages/Home"
import AddUser from "./pages/AddUser"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import EditUser from "./pages/EditUser"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add-user" component={AddUser} />
                <Route exact path="/edit-user/:id" component={EditUser} />
            </Switch>
        </div>
    )
}

export default App
