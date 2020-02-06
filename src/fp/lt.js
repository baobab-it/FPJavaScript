import lt from "lodash-es/lt";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("lt", lt);
func.placeholder = placeholder;

export default func;
