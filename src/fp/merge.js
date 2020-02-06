import merge from "lodash-es/merge";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("merge", merge);
func.placeholder = placeholder;

export default func;
