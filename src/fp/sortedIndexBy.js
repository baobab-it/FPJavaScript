import sortedIndexBy from "lodash-es/sortedIndexBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedIndexBy", sortedIndexBy);
func.placeholder = placeholder;

export default func;
