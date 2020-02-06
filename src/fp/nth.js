import nth from "lodash-es/nth";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("nth", nth);
func.placeholder = placeholder;

export default func;
