import sortedLastIndexOf from "lodash-es/sortedLastIndexOf";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedLastIndexOf", sortedLastIndexOf);
func.placeholder = placeholder;

export default func;
