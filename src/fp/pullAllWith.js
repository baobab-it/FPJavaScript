import pullAllWith from "lodash-es/pullAllWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pullAllWith", pullAllWith);
func.placeholder = placeholder;

export default func;
