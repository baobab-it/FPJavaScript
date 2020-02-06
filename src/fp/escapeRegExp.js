import escapeRegExp from "lodash-es/escapeRegExp";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("escapeRegExp", escapeRegExp, _falseOptions);
func.placeholder = placeholder;

export default func;
