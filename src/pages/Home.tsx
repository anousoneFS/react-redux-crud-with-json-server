import React, { useEffect } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import Tableuser from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { UsersType } from "../state/actionType"
import { useSelector, useDispatch } from "react-redux"
import { loadUsers, deleteUser } from "../state/action"
import { rootReducerType } from "../state/root-reducer"
import { Button, ButtonGroup } from "@material-ui/core"
import { useHistory } from "react-router"

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const StyledTableuser = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(Tableuser)

const useStyles = makeStyles({
    table: {
        marginTop: "50px",
        minWidth: 600,
    },
})

export default function Home() {
    const [id, setId] = React.useState(null)
    const classes = useStyles()
    let dispatch = useDispatch()
    let history = useHistory()
    const { users } = useSelector((state: rootReducerType) => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    }, [id])

    const handleDelete = (id: any) => {
        if (window.confirm("are you sure you want to delete user ?")) {
            dispatch(deleteUser(id))
            //* loadData againt when user was deleted
            setId(id)
        }
    }

    return (
        <TableContainer component={Paper}>
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "30px",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/add-user")}
                >
                    Add User
                </Button>
            </div>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <Tableuser>
                        <StyledTableCell>name</StyledTableCell>
                        <StyledTableCell align="center">email</StyledTableCell>
                        <StyledTableCell align="center">
                            contract
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            address
                        </StyledTableCell>
                        <StyledTableCell align="center">action</StyledTableCell>
                    </Tableuser>
                </TableHead>
                <TableBody>
                    {users &&
                        users.map((user: UsersType) => (
                            <StyledTableuser key={user.name}>
                                <StyledTableCell component="th" scope="user">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.email}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.contract}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.address}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonGroup
                                        variant="contained"
                                        // aria-label="contained primary button group"
                                    >
                                        <Button
                                            color="secondary"
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            color="primary"
                                            onClick={() =>
                                                history.push(
                                                    `/edit-user/${user.id}`
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableuser>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
