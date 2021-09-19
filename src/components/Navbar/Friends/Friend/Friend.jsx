import React from "react";

const Friend = (props) => {
  return (
    <li>
      <span />
      <img src={props.avatar} alt={props.name} width="48" />
      <p>{props.name}</p>
    </li>
  );
};

export default Friend;
