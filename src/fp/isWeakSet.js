import isWeakSet from "lodash-es/isWeakSet";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isWeakSet", isWeakSet, _falseOptions);
func.placeholder = placeholder;

export default func;
