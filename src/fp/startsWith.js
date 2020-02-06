import startsWith from "lodash-es/startsWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("startsWith", startsWith);
func.placeholder = placeholder;

export default func;
