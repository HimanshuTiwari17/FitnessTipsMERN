import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { addUser } from "../service/api.js";
import "./HomeBtn.css";
//import { NavLink } from "react-router-dom";
// const tabs = styled(button)`

// `
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
const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const { name } = user;

  const onValueChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  const iconStyle = {
    color: "white", // Set the color to white
    // Add any other custom styles if needed
  };

  return (
    <Container>
      <button id="home-btn">
        <NavLink id="btn-text" to="/">
          <ArrowBackIcon style={iconStyle} />
        </NavLink>
      </button>
      <Typography variant="h4">Add Tip</Typography>
      <FormControl>
        <InputLabel>Tip of the day</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          {" "}
          Add tip
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
