import isPlainObject from "lodash-es/isPlainObject";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isPlainObject", isPlainObject, _falseOptions);
func.placeholder = placeholder;

export default func;
