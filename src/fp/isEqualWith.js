import isEqualWith from "lodash-es/isEqualWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("isEqualWith", isEqualWith);
func.placeholder = placeholder;

export default func;
