import filter from "lodash-es/filter";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("filter", filter);
func.placeholder = placeholder;

export default func;
