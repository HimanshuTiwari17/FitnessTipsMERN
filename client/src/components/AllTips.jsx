import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tab,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../service/api";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    color: "red",
  },
}));

const StyledTable = styled(Table)`
  width: 90%;
  margin: 70px 60px 0px 70px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
    padding: 0px;
    text-align: center;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
    text-align: center;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let res = await getUsers();
    //console.log(res);
    setUsers(res.data);
    //(users);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const classes = useStyles();

  const iconStyle = {
    color: "white", // Set the color to white
    // Add any other custom styles if needed
  };

  return (
    <>
      <button id="home-btn">
        <NavLink id="btn-text" to="/">
          <ArrowBackIcon style={iconStyle} />
        </NavLink>
      </button>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>
              <h2>Id</h2>
            </TableCell>
            <TableCell>
              <h2>Tip of the day</h2>
            </TableCell>
            <TableCell>
              <h2>Actions</h2>
            </TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button onClick={() => deleteUserData(user._id)}>Delete</Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUsers;
