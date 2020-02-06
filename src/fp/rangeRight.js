import rangeRight from "lodash-es/rangeRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("rangeRight", rangeRight);
func.placeholder = placeholder;

export default func;
