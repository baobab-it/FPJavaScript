import sortedLastIndexBy from "lodash-es/sortedLastIndexBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortedLastIndexBy", sortedLastIndexBy);
func.placeholder = placeholder;

export default func;
