import isInteger from "lodash-es/isInteger";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isInteger", isInteger, _falseOptions);
func.placeholder = placeholder;

export default func;
