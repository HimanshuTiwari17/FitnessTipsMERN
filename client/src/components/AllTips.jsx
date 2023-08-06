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

const Tabs = styled(Table)`
  margin-top: 65px;
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
  return (
    <>
      <button id="home-btn">
        <NavLink id="btn-text" to="/">
          Home
        </NavLink>
      </button>
      <Tabs>
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>Id</h2>
            </TableCell>
            <TableCell>
              <h2>Tip of the day</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
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
            </TableRow>
          ))}
        </TableBody>
      </Tabs>
    </>
  );
};

export default AllUsers;
