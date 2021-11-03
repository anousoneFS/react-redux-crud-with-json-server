import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { makeStyles, Theme, Grid, Typography } from "@material-ui/core"
import { rootReducerType } from "../store/root-reducers"
import { Increment, Decrement, Reset } from "../store/actions"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        dispaly: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        minHeight: "100vh",
        padding: "20px",
        "& button": {
            fontSize: "30px",
        },
    },
}))

export default function Btn() {
    const classes = useStyles()
    let history = useHistory()
    let { count } = useSelector((state: rootReducerType) => state.count)
    let dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={3} alignItems="center">
                <Grid item style={{ textAlign: "center" }}>
                    <Typography variant="h4">Test Redux</Typography>
                    <button onClick={() => dispatch(Increment(10))}>
                        increment
                    </button>
                </Grid>
                <Grid item>
                    <button onClick={() => dispatch(Decrement(2))}>
                        decrement
                    </button>
                </Grid>
                <Grid item>
                    <button onClick={() => dispatch(Reset())}>reset</button>
                </Grid>
                <Grid item>
                    <Typography variant="h5" style={{ color: "blue" }}>
                        {count}
                    </Typography>
                </Grid>
                <Grid item>
                    <button onClick={() => history.push("/")}>go home</button>
                </Grid>
            </Grid>
        </div>
    )
}
