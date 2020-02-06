import isRegExp from "lodash-es/isRegExp";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isRegExp", isRegExp, _falseOptions);
func.placeholder = placeholder;

export default func;
