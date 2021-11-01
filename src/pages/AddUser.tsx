import React from "react"
import {
    TextField,
    makeStyles,
    Theme,
    Grid,
    Button,
    Typography,
} from "@material-ui/core"

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

function AddUser() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <form>
                    <Grid container xs={12} direction="column" spacing={2}>
                        <Grid item style={{ textAlign: "center" }}>
                            <Typography variant="h4">Add User</Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="name"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="email"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="contract"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="filled-required"
                                label="address"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ margin: "0px 30px" }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default AddUser
