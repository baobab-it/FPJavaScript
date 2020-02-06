import isNumber from "lodash-es/isNumber";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isNumber", isNumber, _falseOptions);
func.placeholder = placeholder;

export default func;
