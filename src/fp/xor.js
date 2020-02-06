import xor from "lodash-es/xor";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("xor", xor);
func.placeholder = placeholder;

export default func;
