import React from "react";
import playerImg from "../../Assets/images/3.jpg";
import classes from "../../Styles/Miniplayer.module.css";

const Miniplayer = () => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>
        {" "}
        close{" "}
      </span>
      <img src={playerImg} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default Miniplayer;
