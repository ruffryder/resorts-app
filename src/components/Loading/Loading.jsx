import React from "react";
import loadingGif from "../../images/gif/loading.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Loading data...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}
