import React from "react";
import "./ShowTip.css";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";

const ShowTip = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    showTips();
  }, []);
  function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * users.length);
    //console.log(name);

    let randomTip = users[randomIndex];
    const text = randomTip.name;
    const tipElement = document.getElementById("mid_sec");
    tipElement.textContent = text;
  }

  const showTips = async () => {
    let res = await getUsers();

    console.log(res.data);
    if (res.data.length == 0) {
      setUsers([{ _id: "yoo!", name: "Nothing to show!", __v: 0 }]);
    } else {
      setUsers(res.data);
    }

    //(users);
  };
  return (
    <div className="container">
      <div className="heading">Tips Generator</div>
      <div id="main_joke">
        <h2 id="mid_sec">Lets go</h2>
      </div>
      <div className="butn">
        <button id="btn" onClick={() => getRandomTip()}>
          Get Tips Of The Day
        </button>
      </div>
    </div>
  );
};

export default ShowTip;
