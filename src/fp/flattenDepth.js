import flattenDepth from "lodash-es/flattenDepth";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("flattenDepth", flattenDepth);
func.placeholder = placeholder;

export default func;
