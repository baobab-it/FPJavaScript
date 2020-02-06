import sortedIndexOf from "lodash-es/sortedIndexOf";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedIndexOf", sortedIndexOf);
func.placeholder = placeholder;

export default func;
