import findLast from "lodash-es/findLast";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("findLastFrom", findLast);
func.placeholder = placeholder;

export default func;
