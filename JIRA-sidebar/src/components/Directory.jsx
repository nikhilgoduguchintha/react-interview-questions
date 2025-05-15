import React from "react";
import { data } from "../data/data";
import Nodes from "./Nodes";
const Directory = () => {
  return (
    <div className="directory">
      <Nodes nodes={data} />
    </div>
  );
};

export default Directory;
