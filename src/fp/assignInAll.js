import assignIn from "lodash-es/assignIn";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("assignInAll", assignIn);
func.placeholder = placeholder;

export default func;
