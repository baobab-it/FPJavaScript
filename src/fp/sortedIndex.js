import sortedIndex from "lodash-es/sortedIndex";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedIndex", sortedIndex);
func.placeholder = placeholder;

export default func;
