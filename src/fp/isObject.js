import isObject from "lodash-es/isObject";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isObject", isObject, _falseOptions);
func.placeholder = placeholder;

export default func;
