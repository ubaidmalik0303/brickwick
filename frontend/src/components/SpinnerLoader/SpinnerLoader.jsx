import React from "react";
import { TailSpin } from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <div
      style={{
        margin: "50px auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default SpinnerLoader;
