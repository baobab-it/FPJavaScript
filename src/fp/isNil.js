import isNil from "lodash-es/isNil";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("isNil", isNil, _falseOptions);
func.placeholder = placeholder;

export default func;
