import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
//import Login from "./login.js";
const Header = styled(AppBar)`
  background: #111111;
  opacity: 0.5;
  position: fixed;
  z-index: 1;
  box-shadow: 50px 10px 10px black;
`;

const Tabs = styled(NavLink)`
  font-size: 30px;
  margin-right: 20px;
  padding: 5px;
  color: #fbfbfb;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const NavBar = ({ isLoggedIn }) => {
  //  const [user] = useState({}); // Removed unused setLoginUser
  //const navigate = useNavigate();
  //const check = user && user._id;
  //useEffect(() => {}, [props.check]);

  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home</Tabs>
        <Tabs
          style={{
            display: isLoggedIn ? "block" : "none",
          }}
          to="/all"
        >
          All tips
        </Tabs>
        <Tabs
          style={{
            display: isLoggedIn ? "block" : "none",
          }}
          to="/add"
        >
          Add tips
        </Tabs>
        <Tabs
          to="/login" // Navigate to the Login component
        >
          {isLoggedIn ? "Logout" : "Login/Register"} {/* Use props.check */}
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
