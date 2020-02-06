import isWeakMap from "lodash-es/isWeakMap";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isWeakMap", isWeakMap, _falseOptions);
func.placeholder = placeholder;

export default func;
