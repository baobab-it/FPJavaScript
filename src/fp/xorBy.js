import xorBy from "lodash-es/xorBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("xorBy", xorBy);
func.placeholder = placeholder;

export default func;
