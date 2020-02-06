import cloneWith from "lodash-es/cloneWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("cloneWith", cloneWith);
func.placeholder = placeholder;

export default func;
