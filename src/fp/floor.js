import floor from "lodash-es/floor";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("floor", floor);
func.placeholder = placeholder;

export default func;
