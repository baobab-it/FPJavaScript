import isArrayBuffer from "lodash-es/isArrayBuffer";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isArrayBuffer", isArrayBuffer, _falseOptions);
func.placeholder = placeholder;

export default func;
