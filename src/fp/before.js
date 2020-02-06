import before from "lodash-es/before";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("before", before);
func.placeholder = placeholder;

export default func;
