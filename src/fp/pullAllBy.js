import pullAllBy from "lodash-es/pullAllBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pullAllBy", pullAllBy);
func.placeholder = placeholder;

export default func;
