import maxBy from "lodash-es/maxBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("maxBy", maxBy);
func.placeholder = placeholder;

export default func;
