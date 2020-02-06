import findLast from "lodash-es/findLast";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("findLast", findLast);
func.placeholder = placeholder;

export default func;
