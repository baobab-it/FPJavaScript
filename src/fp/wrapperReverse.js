import wrapperReverse from "lodash-es/wrapperReverse";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("wrapperReverse", wrapperReverse, _falseOptions);
func.placeholder = placeholder;

export default func;
