import xorWith from "lodash-es/xorWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("xorWith", xorWith);
func.placeholder = placeholder;

export default func;
