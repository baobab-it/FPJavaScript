import isBuffer from "lodash-es/isBuffer";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isBuffer", isBuffer, _falseOptions);
func.placeholder = placeholder;

export default func;
