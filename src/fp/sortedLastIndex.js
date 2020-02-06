import sortedLastIndex from "lodash-es/sortedLastIndex";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedLastIndex", sortedLastIndex);
func.placeholder = placeholder;

export default func;
