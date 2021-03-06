import curry from "lodash-es/curry";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("curryN", curry);
func.placeholder = placeholder;

export default func;
