import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { editUser, getUser } from "../service/api.js";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultValue = {
  name: "",
};
const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const { name } = user;

  const onValueChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  useEffect(() => {
    loadUserDetails();
  }, []);
  const { id } = useParams();

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <button id="home-btn">
        <NavLink id="btn-text" to="/all">
          All Users
        </NavLink>
      </button>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          {" "}
          Update Tip
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
