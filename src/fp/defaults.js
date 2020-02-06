import defaults from "lodash-es/defaults";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("defaults", defaults);
func.placeholder = placeholder;

export default func;
