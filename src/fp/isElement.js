import isElement from "lodash-es/isElement";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isElement", isElement, _falseOptions);
func.placeholder = placeholder;

export default func;
