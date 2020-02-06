import forOwnRight from "lodash-es/forOwnRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("forOwnRight", forOwnRight);
func.placeholder = placeholder;

export default func;
