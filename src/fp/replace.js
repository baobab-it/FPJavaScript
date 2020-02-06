import replace from "lodash-es/replace";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("replace", replace);
func.placeholder = placeholder;

export default func;
