import React from "react";

const Coin = ({ side }) => {
  return (
    <div>
      <img src={side} alt="showing a us coin" />
    </div>
  );
};
export default Coin;
