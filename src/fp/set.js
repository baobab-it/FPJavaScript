import set from "lodash-es/set";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("set", set);
func.placeholder = placeholder;

export default func;
