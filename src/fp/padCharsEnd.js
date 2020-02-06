import padEnd from "lodash-es/padEnd";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("padCharsEnd", padEnd);
func.placeholder = placeholder;

export default func;
