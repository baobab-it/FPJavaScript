import endsWith from "lodash-es/endsWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("endsWith", endsWith);
func.placeholder = placeholder;

export default func;
