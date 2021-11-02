import React, { useState, useEffect } from "react"
import { rootReducerType } from "../state/root-reducer"
import { useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    TextField,
    makeStyles,
    Theme,
    Grid,
    Button,
    Typography,
} from "@material-ui/core"
import { getSingleUser, updateUser } from "../state/action"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: 0,
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
    },
    box: {
        width: "400px",
        height: "100%",
        marginTop: "20px",
    },
}))
interface ParamTypes {
    id: string
}

function EditUser() {
    const classes = useStyles()
    const { user } = useSelector((state: rootReducerType) => state.data)
    const [state, setState] = useState({
        name: "",
        email: "",
        contract: "",
        address: "",
    })
    const [error, setError] = useState("")
    const { name, email, contract, address } = state
    let dispatch = useDispatch()
    let history = useHistory()
    let { id } = useParams<ParamTypes>()

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!name || !email || !contract || !address) {
            setError("please enter all input field")
        } else {
            dispatch(updateUser(state, id))
            setError("")
            history.push("/")
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container direction="column" spacing={2}>
                        <Grid item style={{ textAlign: "center" }}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => history.push("/")}
                            >
                                Go back
                            </Button>
                        </Grid>
                        <Grid item style={{ textAlign: "center" }}>
                            <Typography variant="h4">Edit User</Typography>
                            {error && <h3>{error}</h3>}
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="name"
                                variant="outlined"
                                fullWidth
                                name="name"
                                value={state.name || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="email"
                                variant="outlined"
                                fullWidth
                                type="email"
                                name="email"
                                value={state.email || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="contract"
                                variant="outlined"
                                fullWidth
                                type="tel"
                                name="contract"
                                value={state.contract || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="address"
                                variant="outlined"
                                fullWidth
                                name="address"
                                value={state.address || ""}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ margin: "0px 30px" }}
                            type="submit"
                        >
                            Update
                        </Button>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default EditUser
