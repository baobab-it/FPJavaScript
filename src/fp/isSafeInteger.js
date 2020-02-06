import isSafeInteger from "lodash-es/isSafeInteger";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isSafeInteger", isSafeInteger, _falseOptions);
func.placeholder = placeholder;

export default func;
