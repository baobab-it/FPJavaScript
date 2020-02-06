import isArray from "lodash-es/isArray";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isArray", isArray, _falseOptions);
func.placeholder = placeholder;

export default func;
