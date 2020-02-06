import findLastIndex from "lodash-es/findLastIndex";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("findLastIndex", findLastIndex);
func.placeholder = placeholder;

export default func;
