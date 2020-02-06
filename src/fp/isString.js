import isString from "lodash-es/isString";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isString", isString, _falseOptions);
func.placeholder = placeholder;

export default func;
