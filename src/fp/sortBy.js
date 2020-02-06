import sortBy from "lodash-es/sortBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("sortBy", sortBy);
func.placeholder = placeholder;

export default func;
