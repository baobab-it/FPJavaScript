import isTypedArray from "lodash-es/isTypedArray";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isTypedArray", isTypedArray, _falseOptions);
func.placeholder = placeholder;

export default func;
