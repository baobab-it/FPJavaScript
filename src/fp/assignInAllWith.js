import assignInWith from "lodash-es/assignInWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("assignInAllWith", assignInWith);
func.placeholder = placeholder;

export default func;
