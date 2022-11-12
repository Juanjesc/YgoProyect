import React from "react";
import { useContext } from "react";
import YgoContext from "../context/YgoProvider";

const useYgoContext = () => {
  return useContext(YgoContext)
}

export default useYgoContext
