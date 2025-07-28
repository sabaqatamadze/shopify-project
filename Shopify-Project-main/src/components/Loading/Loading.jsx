import React from "react";
import "./Loading.css";
import PulseLoading from "react-spinners/PulseLoader";
const Loading = () => {
  return (
    <div className="loading-component">
      <PulseLoading />
    </div>
  );
};

export default Loading;
