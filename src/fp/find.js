import find from "lodash-es/find";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("find", find);
func.placeholder = placeholder;

export default func;
