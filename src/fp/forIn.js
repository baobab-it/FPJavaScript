import forIn from "lodash-es/forIn";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("forIn", forIn);
func.placeholder = placeholder;

export default func;
