import curryRight from "lodash-es/curryRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("curryRightN", curryRight);
func.placeholder = placeholder;

export default func;
