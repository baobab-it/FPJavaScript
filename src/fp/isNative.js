import isNative from "lodash-es/isNative";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isNative", isNative, _falseOptions);
func.placeholder = placeholder;

export default func;
