import isFunction from "lodash-es/isFunction";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isFunction", isFunction, _falseOptions);
func.placeholder = placeholder;

export default func;
